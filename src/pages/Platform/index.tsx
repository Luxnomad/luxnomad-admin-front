import { format } from 'date-fns';

import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { PlatformDetailLink } from '@@constants/links';
import useSearch from '@@hooks/useSearch';
import { usePlatformList } from '@@pages/Platform/hooks';
import FooterContent from '@@pages/Platform/parts/FooterContent';
import PlatformFilter from '@@pages/Platform/parts/PlatformFilter';
import { PlatformListQuery } from '@@pages/Platform/types';
import { PLATFORM_STATUS_STRING } from '@@stores/platform/constants';

function Platform() {
  const query = useSearch<PlatformListQuery>();

  const { content, page } = usePlatformList(query, query.pageNo === undefined);

  return (
    <PageTemplate headerContent={`플랫폼 리스트 (총: ${page.total})`} footerContent={<FooterContent />}>
      <PlatformFilter />
      <Table
        columns={[
          {
            name: 'platformId',
            title: '플랫폼 ID',
            renderContent: ({ id }) => <PlatformDetailLink id={id} />,
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
            name: 'companyEmail',
            title: '회사 이메일',
          },
          {
            name: 'createdAt',
            title: '생성일',
            renderContent: ({ createDatetime }) => format(createDatetime, 'yyyy-MM-dd'),
          },
          {
            name: 'status',
            title: '플랫폼 상태',
            renderContent: ({ status }) => PLATFORM_STATUS_STRING[status],
          },
        ]}
        rows={content ?? []}
        fallbackContent='Empty Data...'
      />
      <Pagination current={page.current} lastPage={page.lastPage} />
    </PageTemplate>
  );
}

export default Platform;
