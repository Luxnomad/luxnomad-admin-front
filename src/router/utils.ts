import { USER_PERMISSION } from '@@constants/permissions';
import { UserPermission } from '@@types/permissions';

export const checkPermission = (targetPermission: UserPermission, userPermission: UserPermission[]) => {
  if (!Array.isArray(userPermission)) return false;
  return userPermission.includes(USER_PERMISSION.SUPER_ADMIN) || userPermission.includes(targetPermission);
};
