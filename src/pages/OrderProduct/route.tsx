import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import OrderProductList from '@@pages/OrderProduct';
import OrderProductDetail from '@@pages/OrderProduct/Detail';
import { RouteProps } from '@@router/types';

const orderProductRoute: RouteProps[] = [
  {
    permission: USER_PERMISSION.READ,
    path: `${PATH.ORDER_PRODUCT}/*`,
    element: <OrderProductList />,
    childRoutes: [
      {
        permission: USER_PERMISSION.READ,
        path: ':orderCode/:productId',
        element: <OrderProductDetail />,
      },
    ],
  },
];

export default orderProductRoute;
