import { OrderListQuery } from '@@pages/Order/types';
import { OrderDetailResponse, OrderListResponse } from '@@stores/order/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { UbittzPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useOrderList = (query: OrderListQuery) => {
  const data = useSWRList<UbittzPageResponse<OrderListResponse>>('/api/order/list', {
    query,
    config: {
      skip: query.pageNo === undefined,
    },
  });

  return formatSWRListResponse(data);
};

export const useOrderDetail = (id?: string) => {
  const { data, mutate, isLoading } = useSWRDetail<OrderDetailResponse>(`/api/order/detail/${id}`, {
    skip: !id,
  });

  return {
    data: data?.data,
    mutate,
    isLoading,
  } as const;
};
