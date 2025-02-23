import { MemberListQuery } from '@@pages/Member/types';
import { MemberDetailResponse, MemberListResponse } from '@@stores/member/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { UbittzPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useMemberList = (query: MemberListQuery) => {
  const result = useSWRList<UbittzPageResponse<MemberListResponse>>('/api/member/list', {
    query,
    config: {
      skip: query.pageNo === undefined,
    },
  });

  return formatSWRListResponse(result);
};

export const useMemberDetail = (memberCode?: string) => {
  const { data, mutate, isLoading } = useSWRDetail<MemberDetailResponse>(`/api/member/detail/${memberCode}`, {
    skip: !memberCode,
  });

  return {
    data: data?.data,
    mutate,
    isLoading,
  } as const;
};
