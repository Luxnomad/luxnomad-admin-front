import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import Detail from '@@components/Detail';
import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import { useOrderDetail } from '@@pages/Order/hooks';
import OrderDetailContent from '@@pages/Order/parts/OrderDetailContent';

function OrderDetail() {
  const { id } = useParams();
  const { data } = useOrderDetail(id);

  if (!data) return 'loading...';

  return (
    <Flex.Vertical className='tw-mt-10'>
      <PageTemplate headerContent={`주문 (#${id})`}>
        <Detail
          title='주문 상세 정보'
          options={[
            {
              name: 'code',
              title: '주문번호',
            },
            {
              name: 'memberCode',
              title: '담당자',
            },
            {
              name: 'orderAt',
              title: '주문일시',
              renderContent: ({ orderAt }) => format(orderAt, 'yyyy.MM.dd HH:mm'),
            },
          ]}
          data={data}
        />
        {data.orderProducts.map((orderProduct) => (
          <OrderDetailContent orderProductInfo={orderProduct} />
        ))}
      </PageTemplate>
    </Flex.Vertical>
  );
}

export default OrderDetail;
