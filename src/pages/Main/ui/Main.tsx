import React from 'react';
import styles from "../styles/Main.module.scss"
import {useTranslation} from "react-i18next";

const Main = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.div}>
            {t("pages.main")}
        </div>
    );
};

export default Main