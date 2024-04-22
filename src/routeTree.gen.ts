// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './apps/reatom-variant/routes/__root';
import { Route as AuthImport } from './apps/reatom-variant/routes/auth';
import { Route as GithubImport } from './apps/reatom-variant/routes/github';
import { Route as IndexImport } from './apps/reatom-variant/routes/index';

// Create/Update Routes

const GithubRoute = GithubImport.update({
  path: '/github',
  getParentRoute: () => rootRoute
} as any).lazy(() => import('./apps/reatom-variant/routes/github.lazy').then((d) => d.Route));

const AuthRoute = AuthImport.update({
  path: '/auth',
  getParentRoute: () => rootRoute
} as any).lazy(() => import('./apps/reatom-variant/routes/auth.lazy').then((d) => d.Route));

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute
} as any).lazy(() => import('./apps/reatom-variant/routes/index.lazy').then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/auth': {
      preLoaderRoute: typeof AuthImport;
      parentRoute: typeof rootRoute;
    };
    '/github': {
      preLoaderRoute: typeof GithubImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([IndexRoute, AuthRoute, GithubRoute]);
