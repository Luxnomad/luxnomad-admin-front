import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import PostForm from '@@pages/PostManagement/Form';
import { UpsertPostDTO } from '@@stores/postManagement/types';

const fetchPostData = (postId: string): UpsertPostDTO => {
  return {
    postId,
    postTitle: '상세 제목',
    postStartDate: '2025-01-01',
    postEndDate: '2025-01-31',
    postingSchedule: '2025-01-01',
    postingType: 'specific',
    postDescription: '상세 설명',
    images: [],
  };
};

function PostUpsert({ type }: { type: 'create' | 'update' }) {
  const { postId } = useParams();

  const [initialValues, setInitialValues] = useState<UpsertPostDTO>({
    postId,
    postTitle: '',
    postStartDate: '',
    postEndDate: '',
    postingSchedule: '',
    postDescription: '',
    postingType: 'specific',
    images: [],
  });

  useEffect(() => {
    if (postId && type === 'update') {
      setInitialValues(fetchPostData(postId));
    }
  }, [postId, type]);

  return <PostForm initialValues={initialValues} onSubmit={(values) => console.log('폼 제출값', values)} formType={postId ? 'update' : 'create'} />;
}

export default PostUpsert;
