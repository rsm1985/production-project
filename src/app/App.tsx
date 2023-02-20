import React, {Suspense} from 'react';
import {useTheme} from 'app/providers/theme';
import {classNames} from 'shared/lib/classNames/classNames';
import {Router} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import './styles/index.scss';
import {PageLoader} from 'widgets/PageLoader';

export const App = () => {
	const { theme, toggleTheme 	} = useTheme();

	return (
  		<div className={classNames('app',
			{}, [theme])
		}>
			<Suspense fallback={<PageLoader />}>
    
      <Navbar/>
				<div className="content-page">
					<Sidebar/>
					<Router/>
  </div>
    </Suspense>

  </div>
	);
};