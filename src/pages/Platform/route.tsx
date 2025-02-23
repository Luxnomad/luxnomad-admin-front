import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import Platform from '@@pages/Platform';
import PlatformCreate from '@@pages/Platform/Create';
import PlatformDetail from '@@pages/Platform/Detail';
import PlatformUpdate from '@@pages/Platform/Update';
import { RouteProps } from '@@router/types';

const platformRoute: RouteProps[] = [
  {
    permission: USER_PERMISSION.READ,
    path: PATH.PLATFORM,
    element: <Platform />,
  },
  {
    permission: USER_PERMISSION.READ,
    path: `${PATH.PLATFORM}/:id`,
    element: <PlatformDetail />,
  },
  {
    permission: USER_PERMISSION.CREATE,
    path: `${PATH.PLATFORM}/create`,
    element: <PlatformCreate />,
  },
  {
    permission: USER_PERMISSION.UPDATE,
    path: `${PATH.PLATFORM}/update/:id`,
    element: <PlatformUpdate />,
  },
];

export default platformRoute;
