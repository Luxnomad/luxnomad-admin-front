import { format } from 'date-fns';
import { Outlet, useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { MemberDetailLink } from '@@constants/links';
import { PATH } from '@@constants/path';
import useSearch from '@@hooks/useSearch';
import { useMemberList } from '@@pages/Member/hooks';
import MemberFilter from '@@pages/Member/parts/MemberFilter';
import { MemberListQuery } from '@@pages/Member/types';
import { MEMBER_STATUS_STRING } from '@@stores/member/constants';

function Member() {
  const navigate = useNavigate();
  const query = useSearch<MemberListQuery>();
  const { content, page } = useMemberList(query);

  const handleCreateMember = () => {
    navigate(`${PATH.MEMBER}/create`);
  };

  return (
    <PageTemplate headerContent={`유저 리스트 (총: ${content?.length ?? 0})`}>
      <MemberFilter />
      <Button onClick={handleCreateMember}>신규</Button>
      <Table
        columns={[
          {
            name: 'id',
            title: '유저 ID',
            renderContent: ({ code, id }) => <MemberDetailLink id={code}>{id}</MemberDetailLink>,
          },
          {
            name: 'name',
            title: '유저명',
          },
          {
            name: 'email',
            title: '이메일',
          },
          {
            name: 'tel',
            title: '전화번호',
          },
          {
            name: 'status',
            title: '상태',
            renderContent: ({ status }) => MEMBER_STATUS_STRING[status],
          },
          {
            name: 'platformName',
            title: '플랫폼명',
            renderContent: ({ platformName }) => platformName,
          },
          {
            name: 'createDateTime',
            title: '생성일',
            renderContent: ({ createDatetime }) => format(new Date(createDatetime), 'yyyy.MM.dd'),
          },
        ]}
        rows={content || []}
        fallbackContent='Empty Data...'
      />
      <Pagination current={page?.current} lastPage={page?.lastPage} />
      <Outlet />
    </PageTemplate>
  );
}

export default Member;
