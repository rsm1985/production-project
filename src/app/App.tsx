import React from 'react';
import "./styles/index.scss"
import {useTheme} from "app/providers/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {Router} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";


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
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <Router />
            </div>

        </div>
    );
};