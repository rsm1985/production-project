import React, {Suspense} from 'react';
import {useTheme} from 'app/providers/theme';
import {classNames} from 'shared/lib/classNames/classNames';
import {Router} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import './styles/index.scss';

export const App = () => {
	const {
		theme,
		toggleTheme
	} = useTheme();

	return (

  <div className={classNames('app',
			{}, [theme])
		}>
  <Suspense fallback={<div>...</div>}>
  <Navbar/>
  <div className="content-page">
  <Sidebar/>
  <Router/>
				</div>
			</Suspense>

		</div>
	);
};