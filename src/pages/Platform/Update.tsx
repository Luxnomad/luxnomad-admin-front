import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { PATH } from '@@constants/path';
import PlatformForm from '@@pages/Platform/Form';
import { usePlatformDetail } from '@@pages/Platform/hooks';
import { PlatformEditForm } from '@@pages/Platform/types';
import { sanitizePlatformEditForm } from '@@pages/Platform/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { updatePlatformFailure, updatePlatformRequest, updatePlatformSuccess } from '@@stores/platform/reducer';

function PlatformUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { data } = usePlatformDetail(id ?? '');

  const handleSubmit = (form: PlatformEditForm) => {
    dispatch(updatePlatformRequest(sanitizePlatformEditForm(form)));
  };

  useActionSubscribe({
    type: updatePlatformSuccess.type,
    callback: () => {
      showSuccessToast('플랫폼 수정이 완료되었습니다.');
      navigate(`${PATH.PLATFORM}/${id}`);
    },
  });

  useActionSubscribe({
    type: updatePlatformFailure.type,
    callback: ({ payload }: ReturnType<typeof updatePlatformFailure>) => {
      showErrorToast(payload);
    },
  });

  if (!data?.data) return 'Loading...';

  const initialValues: PlatformEditForm = {
    ...data.data,
  };

  return <PlatformForm initialValues={initialValues} formType='update' onSubmit={handleSubmit} />;
}

export default PlatformUpdate;
