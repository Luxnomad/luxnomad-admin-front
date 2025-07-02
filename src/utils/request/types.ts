import { AxiosError, AxiosResponse } from 'axios';
import { SWRConfiguration } from 'swr';

// eslint-disable-next-line
export type SWRConfig<D, Q = Record<string, any>> = SWRConfiguration<UbittzResponse<D>> & {
  query?: Q;
  skip?: boolean;
};

export interface UbittzResponse<Data> extends AxiosResponse<Data> {
  ok: boolean;
}

export interface UbittzErrorResponse extends AxiosError {
  ok: boolean;
}

export interface PageQuery {
  // 0부터 시작.
  pageNo: number;
}

export interface UbittzPageResponse<Data> {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number; // 현재 페이지
  numberOfElements: number; // 현재 페이지에 있는 데이터 개수
  size: number; // Take 개수
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number; // 전체 데이터 개수
  totalPages: number; // 전체 페이지 수
  content: Data[];
}

export interface UseQueryParamsConfig<TQuery extends object> {
  initialSearch?: (query: TQuery) => boolean;
  queryKey?: string | string[];
}
