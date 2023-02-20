import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from 'app/config/routeConfig/routeConfig';
import {PageLoader} from 'widgets/PageLoader';

export const AppRouter = () => {
	return (
  <Routes>
  {Object.values(routerConfig).map(({path, element})=>
  <Route key={path} path={path} element={
  <Suspense fallback={<PageLoader />}>
  <div className="page-wrapper">
  {element}
						</div>
					</Suspense>
				}/>)}
		</Routes>
	);
};

export default AppRouter;