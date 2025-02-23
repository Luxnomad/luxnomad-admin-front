import { ADMIN_MEMBER_TYPE } from '@@stores/auth/constants';
import { asType } from '@@types/common';
import { UserPermission } from '@@types/permissions';

export interface AuthState {
  token?: string;

  // User Data
  permission: UserPermission[];
  id: string;
  email: string;
  name: string;
  type?: AdminMemberType;
  shouldFetchMe: boolean;
}

export interface LoginDTO {
  id: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export type AdminMemberType = asType<typeof ADMIN_MEMBER_TYPE>;

export interface AdminDetailResponse {
  id: string;
  email: string;
  name: string;
  type: AdminMemberType;
  permission: UserPermission[];
  platformId?: string;
  createdAt: Date;
}
