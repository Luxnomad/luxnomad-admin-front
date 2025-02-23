import { PAGES } from '@@constants/permissions';

export const PATH = {
  [PAGES.LOGIN]: '/login',
  [PAGES.HOME]: '/',
  [PAGES.ADMIN]: '/admin',
  [PAGES.PLATFORM]: '/platform',
  [PAGES.PRODUCT]: '/product',
  [PAGES.MEMBER]: '/member',
  [PAGES.POST_MANAGEMENT]: '/post-management',
  [PAGES.POPUP_MANAGEMENT]: '/popup-management',
  [PAGES.ORDER]: '/order',
  [PAGES.ORDER_PRODUCT]: '/order-product',
} as const;
