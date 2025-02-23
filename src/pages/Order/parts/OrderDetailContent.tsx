import Detail from '@@components/Detail';
import Flex from '@@components/Flex';
import OrderProductDetailContent from '@@pages/Order/parts/OrderProductDetailContent';
import { ORDER_STATUS_STRING } from '@@stores/order/constants';
import { OrderProductInformation } from '@@stores/order/types';

function OrderDetailContent({ orderProductInfo }: { orderProductInfo: OrderProductInformation }) {
  return (
    <Flex.Vertical className='tw-mt-8'>
      <div className='tw-flex tw-w-full tw-h-px tw-bg-gray-200 tw-mb-4' />
      <Detail
        title={orderProductInfo.product.name}
        options={[
          {
            name: 'orderPrice',
            title: '상품 가격',
            renderContent: ({ orderPrice }) => `${orderPrice.toLocaleString()}원`,
          },
          {
            name: 'orderStatus',
            title: '상품 판매 상태',
            renderContent: ({ orderStatus }) => `${ORDER_STATUS_STRING[orderStatus]}`,
          },
        ]}
        data={orderProductInfo}
      />
      <OrderProductDetailContent orderProduct={orderProductInfo.product} />
    </Flex.Vertical>
  );
}

export default OrderDetailContent;
