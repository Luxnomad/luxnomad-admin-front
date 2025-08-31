import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import BookHistory from '@@pages/BookHistory';
import { RouteProps } from '@@router/types';

import BookHistoryDetail from './Detail';

export const bookHistoryRoute: RouteProps[] = [
  {
    path: PATH.BOOK_HISTORY,
    element: <BookHistory />,
    permission: USER_PERMISSION.READ,
  },
  {
    path: `${PATH.BOOK_HISTORY}/:id`,
    element: <BookHistoryDetail />,
    permission: USER_PERMISSION.READ,
  },
];
