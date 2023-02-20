import {MainPage} from 'pages/Main';
import { RouteProps} from 'react-router';
import {AboutPage} from 'pages/About';
import {NotFound} from 'pages/NotFound';

const RoutePath = {
	main: '/',
	about: '/about',
	notFound: '*'
};

export const routerConfig: Record<keyof typeof RoutePath, RouteProps> = {
	main: {
		path: RoutePath.main,
		element: <MainPage />
	},
	about: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	notFound: {
		path: RoutePath.notFound,
		element: <NotFound />
	}
};