import { PAGES } from '@@constants/permissions';

export const PATH = {
  [PAGES.LOGIN]: '/login',
  [PAGES.BOOK]: '/book',
  [PAGES.BOOK_HISTORY]: '/book-history',
} as const;
