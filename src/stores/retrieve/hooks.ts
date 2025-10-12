import { useParams } from 'react-router-dom';

import useSearch from '@@hooks/useSearch';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { LuxnomadPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

import { BookListRequest, BookListResponse, RetrieveResponse } from './types';

export const useRetrieveList = (query?: BookListRequest) => {
  const search = useSearch<BookListRequest>();
  const newQuery = query ?? search;

  const data = useSWRList<LuxnomadPageResponse<BookListResponse>>(`/admin/hotel/retrieve/list`, {
    query: newQuery,
    skip: newQuery.page === undefined,
  });

  return formatSWRListResponse(data);
};

export const useRetrieveDetail = (reservationId?: string) => {
  const { id } = useParams();

  const code = reservationId ?? id;

  const { data, mutate } = useSWRDetail<RetrieveResponse>(`/admin/hotel/reservation/${code}`, {
    skip: !code,
  });

  return {
    data: data?.data.body,
    mutate,
  };
};
