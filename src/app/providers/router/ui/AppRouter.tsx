import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from 'app/config/routeConfig/routeConfig';

export const AppRouter = () => {
	return (
  <Suspense fallback={<div>...loading</div>}>
  <Routes>
  {Object.values(routerConfig).map(({path, element})=>
  <Route key={path} path={path} element={
  <Suspense fallback={<div>...loading</div>}>
  <div className="page-wrapper">
  {element}
							</div>
						</Suspense>
					}/>)}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;