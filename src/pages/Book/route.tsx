import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import Book from '@@pages/Book';
import { RouteProps } from '@@router/types';

export const bookRoute: RouteProps[] = [
  {
    path: PATH.BOOK_HISTORY,
    element: <Book />,
    permission: USER_PERMISSION.READ,
  },
];
