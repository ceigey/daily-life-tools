/** @import { RouteObject } from 'react-router-dom' */

import { Info } from './pages/Info';
import { Home } from './pages/Home';

/**
 * @satisfies {RouteObject[]}
 */
export const routes = [
    {
        path: '/',
        Component: Home, 
    },
    {
        path: '/info',
        Component: Info,
    }
]
