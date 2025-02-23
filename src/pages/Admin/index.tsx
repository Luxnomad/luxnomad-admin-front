import { format } from 'date-fns';

import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { AdminDetailLink } from '@@constants/links';
import useSearch from '@@hooks/useSearch';
import { useAdminList } from '@@pages/Admin/hooks';
import AdminListFilter from '@@pages/Admin/parts/AdminListFilter';
import FooterContent from '@@pages/Admin/parts/FooterContent';
import { AdminListQuery } from '@@pages/Admin/types';
import { ADMIN_MEMBER_TYPE_STRING } from '@@stores/auth/constants';

function Admin() {
  const query = useSearch<AdminListQuery>();

  const { content, page } = useAdminList(query);

  return (
    <PageTemplate headerContent={`Admin 리스트 (총: ${page.total}건)`} footerContent={<FooterContent />}>
      <AdminListFilter />
      <Table
        columns={[
          {
            name: 'id',
            title: 'ID',
            renderContent: ({ id }) => <AdminDetailLink id={id} />,
          },
          {
            name: 'email',
            title: 'Email',
          },
          {
            name: 'name',
            title: '이름',
          },
          {
            name: 'type',
            title: '멤버 타입',
            renderContent: ({ type }) => ADMIN_MEMBER_TYPE_STRING[type],
          },
          {
            name: 'createdAt',
            title: '생성일',
            renderContent: ({ createdAt }) => format(createdAt, 'yyyy-MM-dd'),
          },
        ]}
        rows={content ?? []}
      />
      <Pagination current={page.current} lastPage={page.lastPage} />
    </PageTemplate>
  );
}

export default Admin;
