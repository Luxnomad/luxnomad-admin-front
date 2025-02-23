import { useState, useEffect } from 'react';

import { PopupList } from '@@stores/popupManagement/types';

const dummyData: PopupList[] = [
  {
    id: '1',
    popupId: 'asdfasdfasdf',
    popupTitle: '첫 번째 팝업',
    displayOrder: 1,
    status: 'use',
    popupStartDate: new Date('2025-02-01'),
    popupEndDate: new Date('2025-03-01'),
  },
  {
    id: '2',
    popupId: 'qwerqwerqqwe',
    popupTitle: '두 번째 팝업',
    displayOrder: 2,
    status: 'unused',
    popupStartDate: new Date('2025-02-01'),
    popupEndDate: new Date('2025-03-01'),
  },
  {
    id: '3',
    popupId: 'rtyurtyu',
    popupTitle: '세 번째 팝업',
    displayOrder: 3,
    status: 'use',
    popupStartDate: new Date('2025-02-01'),
    popupEndDate: new Date('2025-03-01'),
  },
];

const dummyPage = {
  current: 1,
  lastPage: 1,
  total: dummyData.length,
};

export const usePopupList = (query: PopupList) => {
  const [data, setData] = useState<PopupList[]>([]);
  const [page, setPage] = useState<typeof dummyPage>(dummyPage);

  useEffect(() => {
    setData(dummyData);
    setPage(dummyPage);
  }, [query]);

  return { data, page };
};
