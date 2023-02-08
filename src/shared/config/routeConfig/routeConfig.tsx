import {RouterProps} from "react-router-dom";
import {MainPage} from "pages/Main";
import {PathRouteProps, RouteProps} from "react-router";
import {AboutPage} from "pages/About";

const RoutePath = {
    main: "/",
    about: "/about"
}

export const routerConfig: Record<keyof typeof RoutePath, RouteProps> = {
    main: {
        path: RoutePath.main,
        element: <MainPage />
    },
    about: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}