import { OrderProductListResponse } from '@@stores/orderProduct/types';
import { PageQuery } from '@@utils/request/types';

export interface OrderProductListQuery extends PageQuery {
  productName?: string;
  orderFrom?: string;
  orderTo?: string;
  orderStatuses?: string[];
  orderMemberCode?: string;
}

export interface OrderProductListWithIdResponse extends OrderProductListResponse {
  orderProductId: string;
}
