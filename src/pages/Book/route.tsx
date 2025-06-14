import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import Book from '@@pages/Book';
import Reservation from '@@pages/Book/Reservation';
import { RouteProps } from '@@router/types';

export const bookRoute: RouteProps[] = [
  {
    path: PATH.BOOK,
    element: <Book />,
    permission: USER_PERMISSION.READ,
  },
  {
    path: `${PATH.BOOK}/reservation`,
    element: <Reservation />,
    permission: USER_PERMISSION.READ,
  },
];
