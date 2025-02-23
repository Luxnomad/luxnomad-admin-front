import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import Product from '@@pages/Product';
import ProductCreate from '@@pages/Product/Create';
import ProductDetail from '@@pages/Product/Detail';
import ProductUpdate from '@@pages/Product/Update';
import { RouteProps } from '@@router/types';

const productRoute: RouteProps[] = [
  {
    permission: USER_PERMISSION.READ,
    path: PATH.PRODUCT,
    element: <Product />,
  },
  {
    permission: USER_PERMISSION.READ,
    path: `${PATH.PRODUCT}/:id`,
    element: <ProductDetail />,
  },
  {
    permission: USER_PERMISSION.CREATE,
    path: `${PATH.PRODUCT}/create`,
    element: <ProductCreate />,
  },
  {
    permission: USER_PERMISSION.UPDATE,
    path: `${PATH.PRODUCT}/update/:id`,
    element: <ProductUpdate />,
  },
];

export default productRoute;
