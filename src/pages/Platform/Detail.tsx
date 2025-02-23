import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import Detail from '@@components/Detail';
import PageTemplate from '@@components/PageTemplate';
import { usePlatformDetail } from '@@pages/Platform/hooks';
import DetailFooterContent from '@@pages/Platform/parts/DetailFooterContent';
import { PLATFORM_STATUS_STRING } from '@@stores/platform/constants';

function PlatformDetail() {
  const { id } = useParams();

  const { data } = usePlatformDetail(id ?? '');

  if (!data) return 'Loading...';

  return (
    <PageTemplate headerContent={`플랫폼 (${id})`} footerContent={<DetailFooterContent />}>
      <Detail
        options={[
          {
            name: 'id',
            title: '플랫폼 ID',
          },
          {
            name: 'name',
            title: '플랫폼명',
          },
          {
            name: 'ownerName',
            title: '대표자명',
          },
          {
            name: 'companyName',
            title: '회사명',
          },
          {
            name: 'companyTel',
            title: '연락처',
          },
          {
            name: 'registrationNumber',
            title: '사업자 등록번호',
          },
          {
            name: 'corporationRegistrationNumber',
            title: '법인 등록번호',
          },
          {
            name: 'companyAddress',
            title: '주소',
          },
          {
            name: 'companyEmail',
            title: '이메일',
          },
          {
            name: 'createDatetime',
            title: '생성일',
            renderContent: ({ createDatetime }) => format(createDatetime, 'yyyy년 MM월 dd일 HH시 mm분'),
          },
          {
            name: 'status',
            title: '플랫폼 상태',
            renderContent: ({ status }) => PLATFORM_STATUS_STRING[status],
          },
        ]}
        data={data?.data}
      />
    </PageTemplate>
  );
}

export default PlatformDetail;
