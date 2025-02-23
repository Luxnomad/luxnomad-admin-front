import { Outlet } from 'react-router-dom';

import PageTemplate from '@@components/PageTemplate';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { OrderProductDetailLink } from '@@constants/links';
import { CheckedListProvider } from '@@context/CheckedListContext';
import useSearch from '@@hooks/useSearch';
import { useOrderProductList } from '@@pages/OrderProduct/hooks';
import OrderProductListFilter from '@@pages/OrderProduct/parts/OrderProductListFilter';
import { OrderProductListQuery } from '@@pages/OrderProduct/types';
import { sanitizeOrderProductListWithId } from '@@pages/OrderProduct/utils';
import { ORDER_STATUS_STRING } from '@@stores/order/constants';

function OrderProductList() {
  const query = useSearch<OrderProductListQuery>();
  const { content, page } = useOrderProductList(query);

  const orderProductList = sanitizeOrderProductListWithId(content ?? []);

  return (
    <CheckedListProvider defaultValue={[]}>
      <PageTemplate headerContent={`주문 상품 리스트`}>
        <OrderProductListFilter />
        <Table
          checkbox
          columns={[
            {
              name: 'productInfo',
              title: '상품명',
              renderContent: ({ orderCode, productInfo }) => (
                <OrderProductDetailLink orderCode={orderCode} id={productInfo.code}>
                  {productInfo.name}
                </OrderProductDetailLink>
              ),
            },
            {
              name: 'orderPrice',
              title: '주문가',
              renderContent: ({ orderPrice }) => orderPrice.toLocaleString(),
            },
            {
              name: 'orderStatus',
              title: '주문상태',
              renderContent: ({ orderStatus }) => ORDER_STATUS_STRING[orderStatus],
            },
            {
              name: 'orderCode',
              title: '주문정보',
              renderContent: ({ orderCode }) => `${orderCode}`,
            },
          ]}
          rows={orderProductList}
          idKey='orderProductId'
        />
        <Pagination current={page.current} lastPage={page.lastPage} />
        <Outlet />
      </PageTemplate>
    </CheckedListProvider>
  );
}

export default OrderProductList;
