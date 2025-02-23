import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import Detail from '@@components/Detail';
import PageTemplate from '@@components/PageTemplate';
import { PlatformDetailLink } from '@@constants/links';
import { useAdminDetail } from '@@pages/Admin/hooks';
import AdminPermissionBox from '@@pages/Admin/parts/AdminPermissionBox';
import { ADMIN_MEMBER_TYPE_STRING } from '@@stores/auth/constants';

function AdminDetail() {
  const { id } = useParams();

  const { data } = useAdminDetail(id ?? '');

  if (!data) return null;

  return (
    <PageTemplate headerContent={`Admin (${data.id})`}>
      <Detail
        options={[
          {
            name: 'id',
            title: 'ID',
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
            name: 'permission',
            title: '권한',
            renderContent: ({ permission }) => <AdminPermissionBox permissions={permission} />,
          },
          {
            name: 'platformId',
            title: '플랫폼',
            renderContent: ({ platformId }) => platformId && <PlatformDetailLink id={platformId}>{platformId}</PlatformDetailLink>,
          },
          {
            name: 'createdAt',
            title: '생성일시',
            renderContent: ({ createdAt }) => format(createdAt, 'yyyy년 MM월 dd일 HH시 mm분'),
          },
        ]}
        data={data}
      />
    </PageTemplate>
  );
}

export default AdminDetail;
