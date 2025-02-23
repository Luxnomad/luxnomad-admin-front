import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import { dispatch } from '@@store';
import { logoutRequest } from '@@stores/auth/reducer';
import { getAccessToken } from '@@utils/localStorage';
import { API_ENDPOINT } from '@@utils/request/constants';
import { UbittzErrorResponse, UbittzResponse } from '@@utils/request/types';

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const responseInterceptor = (axiosRes: AxiosResponse) => {
  const ok = Math.floor(axiosRes.status / 100) < 4;

  // eslint-disable-next-line
  const response: UbittzResponse<any> = {
    ...axiosRes,
    ok,
  };

  return response;
};

const errorInterceptor = async (axiosError: AxiosError) => {
  const error: UbittzErrorResponse = {
    ...axiosError,
    ok: false,
  };

  if (error.status === 401) {
    dispatch(logoutRequest());
  }

  return error;
};

const generatorRequest = () => {
  axios.interceptors.response.use(responseInterceptor, errorInterceptor);

  const generator =
    (method: Method) =>
    // eslint-disable-next-line
    async <Data = any>(path: string, config?: AxiosRequestConfig): Promise<UbittzResponse<Data>> => {
      const accessToken = getAccessToken();

      const newConfig: AxiosRequestConfig = {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: accessToken && `Bearer ${accessToken}`,
        },
        method,
      };

      return axios(path, newConfig);
    };

  return {
    get: generator('get'),
    post: generator('post'),
    put: generator('put'),
    delete: generator('delete'),
    patch: generator('patch'),
  };
};

export const authenticatedRequest = generatorRequest();
