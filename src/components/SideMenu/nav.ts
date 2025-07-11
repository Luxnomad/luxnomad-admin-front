import { NavItem } from '@@components/SideMenu/types';
import { PATH } from '@@constants/path';
import { PAGES } from '@@constants/permissions';

export const navs: NavItem[] = [
  {
    title: 'Book',
    path: PATH.BOOK,
    iconName: 'hotel',
    page: PAGES.BOOK,
  },
];
