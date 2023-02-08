import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <Routes>
                {Object.values(routerConfig).map(({path, element})=>
                <Route key={path} path={path} element={element}/>)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;