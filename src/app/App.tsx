import React, {Suspense} from 'react';
import {useTheme} from "app/providers/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {Router} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import { useTranslation } from 'react-i18next';
import "./styles/index.scss"

const Component = () => {
    const { t, i18n} = useTranslation(["translation"]);

    return <div>
        <button onClick={
            ()=>i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru") }>
            change lang
        </button>
        <h1>{t("title")}</h1>
        <h1>{t("description.part1")}</h1>
    </div>
}
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
            <Suspense fallback={<div>...</div>}>
            <Navbar />

                <Component />

                <div className="content-page">
                    <Sidebar />
                    <Router />
                </div>
            </Suspense>

        </div>
    );
};