import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import Detail from '@@components/Detail';
import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import { useOrderProductDetail } from '@@pages/OrderProduct/hooks';
import OrderProductDetailContent from '@@pages/OrderProduct/parts/OrderProductDetailContent';
import { ORDER_STATUS_STRING } from '@@stores/order/constants';

function OrderProductDetail() {
  const { orderCode, productId } = useParams();
  const { data } = useOrderProductDetail(orderCode, productId);

  if (!data) return 'loading...';

  return (
    <Flex.Vertical className='tw-mt-10'>
      <PageTemplate headerContent={`주문 상품 정보 (${productId})`}>
        <Detail
          title='주문 정보'
          options={[
            {
              name: 'orderPrice',
              title: '주문 가격',
              renderContent: ({ orderPrice }) => `${orderPrice.toLocaleString()}원`,
            },
            {
              name: 'orderStatus',
              title: '주문 상태',
              renderContent: ({ orderStatus }) => `${ORDER_STATUS_STRING[orderStatus]}`,
            },
            {
              name: 'order.code',
              title: '주문 코드',
              renderContent: ({ order }) => `${order.code}`,
            },
            {
              name: 'order.memberCode',
              title: '주문 담당자 코드',
              renderContent: ({ order }) => `${order.memberCode}`,
            },
            {
              name: 'order.orderAt',
              title: '주문일시',
              renderContent: ({ order }) => `${format(order.orderAt, 'yyyy.MM.dd HH:mm')}`,
            },
          ]}
          data={data}
        />
        <OrderProductDetailContent orderProduct={data.orderProduct} />
      </PageTemplate>
    </Flex.Vertical>
  );
}

export default OrderProductDetail;
