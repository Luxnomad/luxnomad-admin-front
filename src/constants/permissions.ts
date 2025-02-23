import { UserPermission } from '@@types/permissions';

export const USER_PERMISSION = {
  READ: 'R',
  CREATE: 'C',
  UPDATE: 'U',
  DELETE: 'D',
  SUPER_ADMIN: 'SUPER',
} as const;

export const ALL_USER_PERMISSION = Object.values(USER_PERMISSION);

export const USER_PERMISSION_STRING: Record<UserPermission, string> = {
  [USER_PERMISSION.READ]: 'Read',
  [USER_PERMISSION.CREATE]: 'Create',
  [USER_PERMISSION.UPDATE]: 'Update',
  [USER_PERMISSION.DELETE]: 'Delete',
  [USER_PERMISSION.SUPER_ADMIN]: 'Super Admin',
} as const;

export const PAGES = {
  LOGIN: 'LOGIN',
  HOME: 'HOME',
  PLATFORM: 'PLATFORM',
  PRODUCT: 'PRODUCT',
  MEMBER: 'MEMBER',
  POST_MANAGEMENT: 'POST_MANAGEMENT',
  POPUP_MANAGEMENT: 'POPUP_MANAGEMENT',
  ADMIN: 'ADMIN',
  ORDER: 'ORDER',
  ORDER_PRODUCT: 'ORDER_PRODUCT',
} as const;
