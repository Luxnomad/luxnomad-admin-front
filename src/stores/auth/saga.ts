import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { loginRequest, loginSuccess, loginFailure } from '@@stores/auth/reducer';
import { saveToken } from '@@utils/localStorage';
import { authenticatedRequest } from '@@utils/request';

import { LoginResponse } from './types';

export interface LuxnomadLoginResponse<Data> extends Omit<AxiosResponse<Data>, 'data'> {
  data: Data;
  ok: boolean;
}

function* login({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const response: LuxnomadLoginResponse<LoginResponse> = yield authenticatedRequest.post('/admin/login', {
      data: payload,
    });
    if (response.ok) {
      console.log(response);
      yield put(loginSuccess(response.data));
      saveToken(response.data.access_token);
    } else {
      yield put(loginFailure('Login Failed.'));
    }
  } catch (e) {
    yield put(loginFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(loginRequest.type, login);
}
