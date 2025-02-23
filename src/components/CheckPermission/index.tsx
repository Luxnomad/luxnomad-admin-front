import { CheckPermissionProps } from '@@components/CheckPermission/types';
import { checkPermission } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useIsSystemAdmin } from '@@stores/auth/selector';

function CheckPermission({ adminOnly, permission, userPermission, fallback, children }: CheckPermissionProps) {
  const storePermission = useAppState((state) => state.auth.permission);
  const isAdmin = useIsSystemAdmin();
  const newUserPermission = userPermission ?? storePermission;

  if (!checkPermission(permission, newUserPermission) || (adminOnly && !isAdmin)) {
    return fallback ?? null;
  }

  return children;
}

export default CheckPermission;
