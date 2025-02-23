import { format } from 'date-fns';
import { Outlet, useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import Dropdown from '@@components/Dropdown';
import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { PostDetailLink } from '@@constants/links';
import { PATH } from '@@constants/path';
import { CheckedListProvider } from '@@context/CheckedListContext';
import { usePostList } from '@@pages/PostManagement/dummy';
import PostListFilter from '@@pages/PostManagement/parts/PostListFilter';
import { POST_STATUS } from '@@stores/postManagement/constants';

function PostManagement() {
  const navigate = useNavigate();
  const { data, page } = usePostList({
    id: '',
    postId: '',
    postTitle: '',
    availability: false,
    startDate: new Date(),
    endDate: new Date(),
    postingType: 'immediate',
    status: POST_STATUS.USE,
  });

  const handleNewPost = () => {
    navigate(`${PATH.POST_MANAGEMENT}/create`);
  };

  return (
    <CheckedListProvider defaultValue={[]}>
      <PageTemplate headerContent={'공지사항 관리'}>
        <PostListFilter />
        <Flex.Horizontal gap={12}>
          <Button onClick={handleNewPost}>신규</Button>
          <Button>삭제</Button>
          <Dropdown
            options={[
              { label: '사용', value: 'enable' },
              { label: '비사용', value: 'disable' },
            ]}
          />
        </Flex.Horizontal>
        <Table
          columns={[
            {
              name: 'id',
              title: 'No',
            },
            {
              name: 'postId',
              title: '공지사항ID',
              renderContent: ({ postId }) => <PostDetailLink id={postId} />,
            },
            {
              name: 'postTitle',
              title: '제목',
            },
            {
              name: 'availability',
              title: '사용여부',
              renderContent: ({ availability }) => (availability ? 'Y' : 'N'),
            },
            {
              name: 'startDate',
              title: '게시기간',
              renderContent: ({ startDate, endDate }) => `${format(startDate, 'yyyy.MM.dd')} ~ ${format(endDate, 'yyyy.MM.dd')}`,
            },
          ]}
          rows={data ?? []}
          checkbox
          idKey='id'
          fallbackContent='Empty Data...'
        />
        <Pagination current={page.current} lastPage={page.lastPage} />
        <Outlet />
      </PageTemplate>
    </CheckedListProvider>
  );
}

export default PostManagement;
