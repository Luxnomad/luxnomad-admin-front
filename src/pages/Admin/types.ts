import { AdminMemberType } from '@@stores/auth/types';
import { FormType } from '@@types/form';
import { UserPermission } from '@@types/permissions';
import { PageQuery } from '@@utils/request/types';

export interface AdminListQuery extends PageQuery {
  id?: string;
  email?: string;
  name?: string;
  type?: AdminMemberType;
  platformId?: string;
}

export interface UpsertAdminForm {
  formType: FormType;
  id?: string;
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
  type: AdminMemberType;
  permission: UserPermission[];
  platformId: string;
}
