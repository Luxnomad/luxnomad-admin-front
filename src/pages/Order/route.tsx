import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import Order from '@@pages/Order';
import OrderDetail from '@@pages/Order/Detail';
import { RouteProps } from '@@router/types';

const orderRoute: RouteProps[] = [
  {
    permission: USER_PERMISSION.READ,
    path: `${PATH.ORDER}/*`,
    element: <Order />,
    childRoutes: [
      {
        permission: USER_PERMISSION.READ,
        path: ':id',
        element: <OrderDetail />,
      },
    ],
  },
];

export default orderRoute;
