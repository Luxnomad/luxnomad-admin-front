import { OrderProductListWithIdResponse } from '@@pages/OrderProduct/types';
import { OrderProductId, OrderProductListResponse } from '@@stores/orderProduct/types';

export const sanitizeOrderProductListWithId = (list: OrderProductListResponse[]): OrderProductListWithIdResponse[] =>
  list.map((orderProduct) => ({
    ...orderProduct,
    orderProductId: `${orderProduct.orderCode}_${orderProduct.productInfo.code}`,
  }));

export const sanitzieOrderConfirmRequest = (orderProduct: OrderProductListResponse[]): OrderProductId[] =>
  orderProduct.map(({ orderCode, productInfo: { code } }) => ({
    orderId: orderCode,
    productId: code,
  }));
