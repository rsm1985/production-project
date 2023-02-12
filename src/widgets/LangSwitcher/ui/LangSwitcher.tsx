import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {langs} from "shared/config/i18n/langs";
import {useTranslation} from 'react-i18next';

import styles from "./LangSwitcher.module.scss";
import {Button, ThemeButton} from "shared/ui";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {i18n} = useTranslation()
    return (
        <div className={classNames(styles.LangSwitcher, {}, [styles[className]])}>
            {langs.map(({name, title})=>
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={() => i18n.changeLanguage(name)} key={title}>
                    {title}
                </Button>)}
        </div>
    );
};