import React, {Suspense} from 'react';
import "./styles/index.scss"
import {Route, Routes, Link} from "react-router-dom";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";

export const App = () => {
    return (
        <div className="app">
            <Link to="/">Main</Link> <Link to="/about">About</Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path="/about" element={<AboutAsync />}/>
                    <Route path="/" element={<MainAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};