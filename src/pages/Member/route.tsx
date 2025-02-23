import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import Member from '@@pages/Member';
import MemberCreate from '@@pages/Member/Create';
import MemberDetail from '@@pages/Member/EditableDetail';
import { RouteProps } from '@@router/types';

const memberRoute: RouteProps[] = [
  {
    permission: USER_PERMISSION.READ,
    path: `${PATH.MEMBER}/*`,
    element: <Member />,
    childRoutes: [
      {
        permission: USER_PERMISSION.READ,
        path: ':id',
        element: <MemberDetail />,
      },
    ],
  },
  {
    permission: USER_PERMISSION.CREATE,
    path: `${PATH.MEMBER}/create`,
    element: <MemberCreate />,
  },
];

export default memberRoute;
