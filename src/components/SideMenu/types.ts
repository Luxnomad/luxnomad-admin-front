import { ReactNode } from 'react';

import { Pages, UserPermission } from '@@types/permissions';

export interface NavItem {
  title: ReactNode;
  path: string;
  permission?: UserPermission;
  iconName?: string;
  page: Pages;
  children?: Omit<NavItem, 'children'>[];
}

export interface SideMenuItemProps {
  navItem: NavItem;
}
