import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PATH } from '@@constants/path';
import PlatformForm from '@@pages/Platform/Form';
import { PlatformCreateForm } from '@@pages/Platform/types';
import { sanitizePlatformCreateForm } from '@@pages/Platform/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { createPlatformFailure, createPlatformRequest, createPlatformSuccess } from '@@stores/platform/reducer';

const initialValues: PlatformCreateForm = {
  id: '',
  name: '',
  ownerName: '',
  companyName: '',
  companyTel: '',
  registrationNumber: '',
  corporationRegistrationNumber: '',
  companyAddress: '',
  companyEmail: '',
};

function PlatformCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (form: PlatformCreateForm) => {
    dispatch(createPlatformRequest(sanitizePlatformCreateForm(form)));
  };

  useActionSubscribe({
    type: createPlatformSuccess.type,
    callback: () => {
      navigate(PATH.PLATFORM);
    },
  });

  useActionSubscribe({
    type: createPlatformFailure.type,
    callback: ({ payload }: ReturnType<typeof createPlatformFailure>) => {
      alert(payload);
    },
  });

  return <PlatformForm formType='create' initialValues={initialValues} onSubmit={handleSubmit} />;
}

export default PlatformCreate;
