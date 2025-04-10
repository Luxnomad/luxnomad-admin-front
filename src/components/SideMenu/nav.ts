import { NavItem } from '@@components/SideMenu/types';
import { PATH } from '@@constants/path';
import { PAGES } from '@@constants/permissions';

export const navs: NavItem[] = [
  {
    title: 'Booking',
    path: PATH.BOOKING,
    iconName: 'hotel',
    page: PAGES.BOOKING,
  },
];
