import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import BookingList from '@@pages/Booking/List';
import { RouteProps } from '@@router/types';

export const bookingRoute: RouteProps[] = [
  {
    path: PATH.BOOKING,
    element: <BookingList />,
    permission: USER_PERMISSION.READ,
  },
];
