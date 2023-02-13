import {MainPage} from 'pages/Main';
import { RouteProps} from 'react-router';
import {AboutPage} from 'pages/About';

const RoutePath = {
	main: '/',
	about: '/about'
};

export const routerConfig: Record<keyof typeof RoutePath, RouteProps> = {
	main: {
		path: RoutePath.main,
		element: <MainPage />
	},
	about: {
		path: RoutePath.about,
		element: <AboutPage />
	}
};