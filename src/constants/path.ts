import { PAGES } from '@@constants/permissions';

export const PATH = {
  [PAGES.LOGIN]: '/login',
  [PAGES.BOOK_HISTORY]: '/book-history',
  [PAGES.BOOK]: '/book',
} as const;
