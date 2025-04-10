import { PAGES } from '@@constants/permissions';
import { bookingRoute } from '@@pages/Booking/route';
import { RouteProps } from '@@router/types';
import { Pages } from '@@types/permissions';

export const routes: Partial<Record<Pages, RouteProps[]>> = {
  [PAGES.BOOKING]: bookingRoute,
};
