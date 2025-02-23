import { MemberEditRequest, MemberCreateRequest } from '@@stores/member/types';
import { FormProps } from '@@types/form';
import { PageQuery } from '@@utils/request/types';

export interface CreateMemberForm extends MemberCreateRequest {
  passwordCheck?: string;
}

export interface EditMemberForm extends MemberEditRequest {
  id?: string;
  name?: string;
  platformId?: string;
  platformName?: string;
  createDatetime: string;
}

export type CreateMemberFormProps = FormProps<CreateMemberForm>;

export type EditMemberFormProps = FormProps<EditMemberForm>;

export interface MemberListQuery extends PageQuery {
  id?: string;
  name?: string;
  platformId?: string;
}

export interface DetailFooterContentProps {
  isEdit: boolean;
  onEdit: () => void;
  onCancel: () => void;
}
