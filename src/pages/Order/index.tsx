import { format } from 'date-fns';
import { Outlet } from 'react-router-dom';

import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { MemberDetailLink, OrderDetailLink } from '@@constants/links';
import useSearch from '@@hooks/useSearch';
import { useOrderList } from '@@pages/Order/hooks';
import OrderListFilter from '@@pages/Order/parts/OrderListFilter';
import { OrderListQuery } from '@@pages/Order/types';

function Order() {
  const query = useSearch<OrderListQuery>();
  const { content, page } = useOrderList(query);

  return (
    <PageTemplate headerContent={`주문 리스트`}>
      <OrderListFilter />
      <Table
        checkbox
        columns={[
          {
            name: 'code',
            title: '주문번호',
            renderContent: ({ code }) => <OrderDetailLink id={code} />,
          },
          {
            name: 'memberCode',
            title: '담당자',
            renderContent: ({ memberCode }) => <MemberDetailLink id={memberCode} />,
          },
          {
            name: 'orderAt',
            title: '주문일시',
            renderContent: ({ orderAt }) => format(orderAt, 'yyyy.MM.dd HH:mm'),
          },
        ]}
        rows={content ?? []}
      />
      <Pagination current={page.current} lastPage={page.lastPage} />
      <Outlet />
    </PageTemplate>
  );
}

export default Order;
