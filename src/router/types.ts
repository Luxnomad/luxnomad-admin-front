import { RouteProps as RRouteProps } from 'react-router-dom';

import { UserPermission } from '@@types/permissions';

export type RouteProps = RRouteProps & {
  permission: UserPermission;
  childRoutes?: RouteProps[];
};
