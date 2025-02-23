import { PropsWithChildren, ReactNode } from 'react';

import { UserPermission } from '@@types/permissions';

export type CheckPermissionProps = PropsWithChildren<{
  adminOnly?: boolean;
  permission: UserPermission;
  userPermission?: UserPermission[];
  fallback?: ReactNode;
}>;
