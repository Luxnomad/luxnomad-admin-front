import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { PATH } from '@@constants/path';
import MemberForm from '@@pages/Member/Form';
import { CreateMemberForm } from '@@pages/Member/types';
import { sanitizeCreateMemberForm } from '@@pages/Member/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { createMemberFailure, createMemberRequest, createMemberSuccess } from '@@stores/member/reducer';

const initialValues: CreateMemberForm = {
  id: '',
  name: '',
  tel: '',
  email: '',
  password: '',
  passwordCheck: '',
  platformId: '',
};

function MemberCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (form: CreateMemberForm) => {
    dispatch(createMemberRequest(sanitizeCreateMemberForm(form)));
  };

  useActionSubscribe({
    type: createMemberSuccess.type,
    callback: () => {
      showSuccessToast('유저 생성이 완료되었습니다.');
      navigate(PATH.MEMBER);
    },
  });

  useActionSubscribe({
    type: createMemberFailure.type,
    callback: ({ payload }: ReturnType<typeof createMemberFailure>) => {
      showErrorToast(payload);
    },
  });

  return <MemberForm formType='create' initialValues={initialValues} onSubmit={handleSubmit} />;
}

export default MemberCreate;
