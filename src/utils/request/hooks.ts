import { useEffect, useRef } from 'react';

import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';

import useSearch from '@@hooks/useSearch';
import { SWRConfig, SWRListConfig, UbittzResponse, UseQueryParamsConfig } from '@@utils/request/types';

// eslint-disable-next-line
export const useSWRList = <D = any, Q extends Record<string, any> = Record<string, any>>(path: string, config?: SWRListConfig<D, Q>) => {
  const prevResponse = useRef<UbittzResponse<D>>();

  const { query, config: swrConfig } = config ?? {};
  const response = useSWR<UbittzResponse<D>>(config?.config?.skip ? null : `${path}?${qs.stringify(query)}`, swrConfig ?? {});

  if (!response.data && !response.error) {
    return { ...response, data: prevResponse.current };
  }

  prevResponse.current = response.data;

  return response;
};

export const useSWRDetail = <D>(path: string, config?: SWRConfig<D>) => {
  const response = useSWR<UbittzResponse<D>>(config?.skip ? null : path, config);
  return response;
};

export const useQueryParams = <TQuery extends object>(
  initialQuery: TQuery,
  { initialSearch, queryKey }: UseQueryParamsConfig<TQuery> | undefined = {}
) => {
  const query = useSearch<TQuery>();
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQuery = (key: keyof TQuery, value: TQuery[keyof TQuery]) => {
    const newQuery = { ...query };

    if (value === '' || value === null || value === undefined) {
      delete newQuery[key];
      setSearchParams(qs.stringify(newQuery, { arrayFormat: 'repeat' }));
      return;
    }

    newQuery[key] = value;
    searchParams.delete(String(key));

    if (Array.isArray(value)) {
      searchParams.set(String(key), value.join(','));
    } else {
      searchParams.set(String(key), String(value));
    }

    setSearchParams(qs.stringify(newQuery, { arrayFormat: 'comma' }));
  };

  const currentQueryKey = Array.isArray(queryKey) ? [...queryKey, query] : [queryKey, query];

  useEffect(() => {
    if (initialSearch?.(query)) {
      const queryString = qs.stringify(initialQuery);
      setSearchParams(queryString);
    }
  }, [query, initialSearch, setSearchParams, initialQuery]);

  return {
    query,
    updateQuery,
    queryKey: currentQueryKey,
  };
};
