import { ORDER_STATUS } from '@@stores/order/constants';
import { ProductDetailResponse } from '@@stores/product/types';
import { asType } from '@@types/common';

export type OrderStatus = asType<typeof ORDER_STATUS>;

/* 주문 정보 types */
export interface OrderBaseResponse {
  code: string; // 주문코드
  memberCode: string; // 담당자 코드
  orderAt: string; // 주문일시
}

export interface OrderListResponse extends OrderBaseResponse {}

export interface OrderDetailResponse extends OrderBaseResponse {
  orderProducts: OrderProductInformation[];
}

// 주문 상품 정보 (간소화)
export interface OrderProductInformation {
  orderPrice: number;
  orderStatus: OrderStatus;
  product: ProductDetailResponse;
}
