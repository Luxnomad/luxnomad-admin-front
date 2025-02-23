import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import PopupForm from '@@pages/PopupManagement/Form';
import { UpsertPopupDTO } from '@@stores/popupManagement/types';

const fetchPopupData = (popupId: string): UpsertPopupDTO => {
  return {
    popupId,
    popupTitle: '상세 제목',
    popupStartDate: '2025-01-01',
    popupEndDate: '2025-01-31',
    popupDescription: '상세 설명',
    images: [],
  };
};

function PopupUpsert({ type }: { type: 'create' | 'update' }) {
  const { popupId } = useParams();
  const [initialValues, setInitialValues] = useState<UpsertPopupDTO>({
    popupTitle: '',
    popupStartDate: '',
    popupEndDate: '',
    popupDescription: '',
    images: [],
  });

  useEffect(() => {
    if (popupId && type === 'update') {
      setInitialValues(fetchPopupData(popupId));
    }
  }, [popupId, type]);

  return <PopupForm initialValues={initialValues} onSubmit={(values) => console.log('폼 제출값', values)} formType={popupId ? 'update' : 'create'} />;
}

export default PopupUpsert;
