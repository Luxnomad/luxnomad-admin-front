import { AdminMemberType } from '@@stores/auth/types';
import { UserPermission } from '@@types/permissions';

export interface AdminListResponse {
  id: string;
  email: string;
  name: string;
  type: AdminMemberType;
  permission: UserPermission[];
  platformId?: string;
  createdAt: Date;
}

export interface AdminDetailResponse {
  id: string;
  email: string;
  name: string;
  type: AdminMemberType;
  permission: UserPermission[];
  platformId?: string;
  createdAt: Date;
}

export interface AdminCreateRequest {
  platformId: string;
  email: string;
  name: string;
  password: string;
  type: AdminMemberType;
  authTypes: UserPermission[];
}
