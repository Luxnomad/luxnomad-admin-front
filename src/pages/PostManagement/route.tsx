import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import PostManagement from '@@pages/PostManagement/index';
import { RouteProps } from '@@router/types';

import PostUpsert from './Upsert';

const postRoute: RouteProps[] = [
  {
    permission: USER_PERMISSION.READ,
    path: `${PATH.POST_MANAGEMENT}/*`,
    element: <PostManagement />,
    childRoutes: [
      {
        permission: USER_PERMISSION.READ,
        path: 'create',
        element: <PostUpsert type='create' />,
      },
      {
        permission: USER_PERMISSION.READ,
        path: ':postId',
        element: <PostUpsert type='update' />,
      },
    ],
  },
];

export default postRoute;
