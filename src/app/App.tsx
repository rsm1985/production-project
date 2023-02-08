import React from 'react';
import "./styles/index.scss"
import { Link} from "react-router-dom";
import {useTheme} from "app/providers/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {Router} from "app/providers/router";


export const App = () => {
    const {
        theme,
        toggleTheme
    } = useTheme()

    return (
        <div className={classNames("app",
            {
            }, [theme])
        }>
            <Link to="/">Main</Link> <Link to="/about">About</Link>
            <button onClick={() => toggleTheme()}>Toggle theme</button>
            <Router />
        </div>
    );
};