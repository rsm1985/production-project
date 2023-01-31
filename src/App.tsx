import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Route, Routes, Link} from "react-router-dom";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";
import {Theme} from "./theme/ThemeContext";
import {useTheme} from "./theme/UseTheme";
import {classNames} from "./helpers/classNames/classNames";


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
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path="/about" element={<AboutAsync/>}/>
                    <Route path="/" element={<MainAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};