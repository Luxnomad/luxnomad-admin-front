import { AxiosError } from 'axios';
import { SWRResponse } from 'swr';

import { authenticatedRequest } from '@@utils/request';
import { UbittzPageResponse, UbittzResponse } from '@@utils/request/types';

export const fetcher = async (url: string) => {
  const res = await authenticatedRequest.get(url);

  if ([4, 5].includes(Math.floor(res.status / 100))) {
    const error = res as unknown as AxiosError;
    throw error;
  }

  return res;
};

export const isBase64 = (str: string) => {
  if (typeof str !== 'string') return false;

  const cleaned = str.trim().replace(/\s/g, '');

  if (cleaned.length % 4 !== 0) return false;

  const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;

  if (!base64Regex.test(cleaned)) return false;

  try {
    atob(cleaned);

    return true;
  } catch {
    return false;
  }
};

export const base64Encoder = (str: string) => btoa(encodeURIComponent(str));

export const base64Decoder = (str: string) => {
  try {
    if (isBase64(str)) {
      return decodeURIComponent(atob(str));
    } else {
      return decodeURIComponent(str);
    }
  } catch {
    return str;
  }
};

export const formatSWRListResponse = <Data>(response: SWRResponse<UbittzResponse<UbittzPageResponse<Data>>>) => {
  const { data: swrData, ...swrResponse } = response;

  const { content, totalElements, number, size, totalPages } = swrData?.data ?? {};

  return {
    ...swrResponse,
    content,
    page: {
      total: totalElements ?? 0,
      current: number ?? 0,
      lastPage: totalPages ?? 0,
      limit: size ?? 0,
    },
  } as const;
};

export const createBlobJSON = (jsonString: string) =>
  new Blob([jsonString], {
    type: 'application/json;charset=UTF-8',
  });
