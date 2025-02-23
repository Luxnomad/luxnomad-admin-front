import { OrderDetailResponse, OrderStatus } from '@@stores/order/types';
import { ProductDetailResponse } from '@@stores/product/types';

export interface OrderProductBaseResponse {
  orderPrice: number;
  orderStatus: OrderStatus;
}

export interface OrderProductListResponse extends OrderProductBaseResponse {
  orderCode: string;
  productInfo: ProductInformation;
}

export interface OrderProductDetailResponse extends OrderProductBaseResponse {
  order: OrderDetailResponse;
  orderProduct: ProductDetailResponse;
}

// 상품정보 (간소화)
export interface ProductInformation {
  code: string; // 상품코드
  name: string; // 상품명
  price: number; // 상품가(정가)
  memberCode: string; // 상품 담당자 코드
}

export interface OrderProductId {
  orderId: string;
  productId: string;
}
