import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import Admin from '@@pages/Admin';
import AdminCreate from '@@pages/Admin/Create';
import AdminDetail from '@@pages/Admin/Detail';
import { RouteProps } from '@@router/types';

const adminRoute: RouteProps[] = [
  {
    permission: USER_PERMISSION.READ,
    path: PATH.ADMIN,
    element: <Admin />,
  },
  {
    permission: USER_PERMISSION.READ,
    path: `${PATH.ADMIN}/:id`,
    element: <AdminDetail />,
  },
  {
    permission: USER_PERMISSION.CREATE,
    path: `${PATH.ADMIN}/create`,
    element: <AdminCreate />,
  },
];

export default adminRoute;
