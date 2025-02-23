import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { PATH } from '@@constants/path';
import AdminForm from '@@pages/Admin/Form';
import { UpsertAdminForm } from '@@pages/Admin/types';
import { sanitizeAdminForm } from '@@pages/Admin/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { createAdminFailure, createAdminRequest, createAdminSuccess } from '@@stores/admin/reducer';
import { ADMIN_MEMBER_TYPE } from '@@stores/auth/constants';

const initialValues: UpsertAdminForm = {
  formType: 'create',
  email: '',
  name: '',
  password: '',
  passwordCheck: '',
  type: ADMIN_MEMBER_TYPE.ADMIN,
  permission: [],
  platformId: '',
};

function AdminCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (form: UpsertAdminForm) => {
    dispatch(createAdminRequest(sanitizeAdminForm(form)));
  };

  useActionSubscribe({
    type: createAdminSuccess.type,
    callback: ({ payload }: ReturnType<typeof createAdminSuccess>) => {
      showSuccessToast('신규 Admin 생성이 완료되었습니다.');
      navigate(`${PATH.ADMIN}/${payload.id}`);
    },
  });

  useActionSubscribe({
    type: createAdminFailure.type,
    callback: ({ payload }: ReturnType<typeof createAdminFailure>) => {
      showErrorToast(payload);
    },
  });

  return <AdminForm initialValues={initialValues} onSubmit={handleSubmit} formType='create' />;
}

export default AdminCreate;
