import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";


export enum ThemeButton {
    CLEAR = "clear",

}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    onClick?: () => void;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({className, children, onClick, theme, ...restProps}) => {
    return (
        <button
            className={classNames(styles.Button, {theme}, [styles[className]])}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </button>
    );
};
