import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import BookHistory from '@@pages/BookHistory';
import { RouteProps } from '@@router/types';

export const bookHistoryRoute: RouteProps[] = [
  {
    path: PATH.BOOK_HISTORY,
    element: <BookHistory />,
    permission: USER_PERMISSION.READ,
  },
];
