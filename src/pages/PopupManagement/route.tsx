import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import PopupManagement from '@@pages/PopupManagement/index';
import PopupUpsert from '@@pages/PopupManagement/Upsert';
import { RouteProps } from '@@router/types';

const popupRoute: RouteProps[] = [
  {
    permission: USER_PERMISSION.READ,
    path: `${PATH.POPUP_MANAGEMENT}/*`,
    element: <PopupManagement />,
    childRoutes: [
      {
        permission: USER_PERMISSION.READ,
        path: 'create',
        element: <PopupUpsert type='create' />,
      },
      {
        permission: USER_PERMISSION.READ,
        path: ':popupId',
        element: <PopupUpsert type='update' />,
      },
    ],
  },
];

export default popupRoute;
