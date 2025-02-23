import { CreateMemberForm, EditMemberForm } from '@@pages/Member/types';
import { MemberCreateRequest, MemberEditRequest } from '@@stores/member/types';

export const sanitizeCreateMemberForm = (form: CreateMemberForm): MemberCreateRequest => {
  const newForm: MemberCreateRequest = {
    id: form.id,
    name: form.name,
    tel: form.tel,
    email: form.email,
    password: form.password,
    platformId: form.platformId,
  };

  if (form.password) {
    newForm.password = form.password;
  }

  return newForm;
};

export const sanitizeEditMemberForm = (form: EditMemberForm): MemberEditRequest => {
  const newForm: MemberEditRequest = {
    code: form.code,
    tel: form.tel,
    email: form.email,
    status: form.status,
  };

  return newForm;
};
