import { AdminListQuery } from '@@pages/Admin/types';
import { AdminListResponse, AdminDetailResponse } from '@@stores/admin/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { UbittzPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useAdminList = (query: AdminListQuery) => {
  const data = useSWRList<UbittzPageResponse<AdminListResponse>>('/api/admin/list', {
    query,
    config: {
      skip: query.pageNo === undefined,
    },
  });

  return formatSWRListResponse(data);
};

export const useAdminDetail = (id: string) => {
  const { data, mutate } = useSWRDetail<AdminDetailResponse>(`/api/admin/detail/${id}`, {
    skip: !id,
  });
  return {
    data: data?.data,
    mutate,
  };
};
