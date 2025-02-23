import { OrderProductListQuery } from '@@pages/OrderProduct/types';
import { OrderProductDetailResponse, OrderProductListResponse } from '@@stores/orderProduct/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { UbittzPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useOrderProductList = (query: OrderProductListQuery) => {
  const data = useSWRList<UbittzPageResponse<OrderProductListResponse>>('/api/order-product/list', {
    query,
    config: {
      skip: query.pageNo === undefined,
    },
  });

  return formatSWRListResponse(data);
};

export const useOrderProductDetail = (orderCode?: string, productId?: string) => {
  const { data, mutate, isLoading } = useSWRDetail<OrderProductDetailResponse>(`/api/order-product/detail/${orderCode}/${productId}`, {
    skip: !orderCode || !productId,
  });

  return {
    data: data?.data,
    mutate,
    isLoading,
  } as const;
};
