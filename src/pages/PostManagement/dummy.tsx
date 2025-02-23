import { useState, useEffect } from 'react';

import { PostList } from '@@stores/postManagement/types';
const dummyData: PostList[] = [
  {
    id: '1',
    postId: 'asdfasdfasdf',
    postTitle: '첫 번째 팝업',
    availability: false,
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-03-01'),
    status: 'use',
  },
  {
    id: '2',
    postId: 'qwerqwerqqwe',
    postTitle: '두 번째 팝업',
    availability: true,
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-03-01'),
    status: 'use',
  },
  {
    id: '3',
    postId: 'rtyurtyu',
    postTitle: '세 번째 팝업',
    availability: true,
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-03-01'),
    status: 'use',
  },
];

const dummyPage = {
  current: 1,
  lastPage: 1,
  total: dummyData.length,
};

export const usePostList = (query: PostList) => {
  const [data, setData] = useState<PostList[]>([]);
  const [page, setPage] = useState<typeof dummyPage>(dummyPage);

  useEffect(() => {
    setData(dummyData);
    setPage(dummyPage);
  }, [query]);

  return { data, page };
};
