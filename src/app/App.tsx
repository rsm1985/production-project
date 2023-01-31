import React, {Suspense} from 'react';
import "./styles/index.scss"
import {Route, Routes, Link} from "react-router-dom";
import {AboutPage} from "pages/About";
import {useTheme} from "app/providers/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from "pages/Main";


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
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};