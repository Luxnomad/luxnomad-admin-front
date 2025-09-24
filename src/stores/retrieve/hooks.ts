import { useParams } from 'react-router-dom';

import { useSWRDetail, useSWRList } from '@@utils/request/hooks';

import { BookListResponse, RetrieveResponse } from './types';

export const useRetrieveList = () => {
  const { data, mutate } = useSWRList<BookListResponse[]>(`/hotel/retrieve/list`);

  return {
    data: data?.data,
    mutate,
  };
};

export const useRetrieveDetail = (reservationId?: string) => {
  const { id } = useParams();

  const code = reservationId ?? id;

  const { data, mutate } = useSWRDetail<RetrieveResponse>(`/hotel/retrieve/detail/${code}`, {
    skip: !code,
  });

  return {
    data: data?.data,
    mutate,
  };
};
