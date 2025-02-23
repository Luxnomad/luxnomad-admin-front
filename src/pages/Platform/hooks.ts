import { PlatformListQuery } from '@@pages/Platform/types';
import { PlatformDetailResponse, PlatformListResponse } from '@@stores/platform/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { UbittzPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const usePlatformList = (query: PlatformListQuery, skip?: boolean) => {
  const result = useSWRList<UbittzPageResponse<PlatformListResponse>>('/api/platform/list', {
    query,
    config: {
      skip,
    },
  });

  return formatSWRListResponse(result);
};

export const usePlatformDetail = (platformId?: string) => {
  const { data, mutate, isLoading } = useSWRDetail<PlatformDetailResponse>(`/api/platform/detail/${platformId}`, {
    skip: !platformId,
  });

  return {
    data,
    mutate,
    isLoading,
  } as const;
};
