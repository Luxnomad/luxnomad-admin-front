import { PAGES } from '@@constants/permissions';
import { bookRoute } from '@@pages/Book/route';
import { bookingRoute } from '@@pages/Booking/route';
import { RouteProps } from '@@router/types';
import { Pages } from '@@types/permissions';

export const routes: Partial<Record<Pages, RouteProps[]>> = {
  [PAGES.BOOK_HISTORY]: bookingRoute,
  [PAGES.BOOK]: bookRoute,
};
