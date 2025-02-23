import { PAGES, USER_PERMISSION } from '@@constants/permissions';
import { asType } from '@@types/common';

export type UserPermission = asType<typeof USER_PERMISSION>;

export type Pages = asType<typeof PAGES>;
