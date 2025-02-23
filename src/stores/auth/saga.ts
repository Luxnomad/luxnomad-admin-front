import { put, takeLatest } from 'redux-saga/effects';

import { loginFailure, loginRequest, loginSuccess, fetchMeRequest, fetchMeSuccess, fetchMeFailure } from '@@stores/auth/reducer';
import { LoginResponse, AdminDetailResponse } from '@@stores/auth/types';
import { saveToken, saveMemberData } from '@@utils/localStorage';
import { authenticatedRequest } from '@@utils/request';
import { UbittzResponse } from '@@utils/request/types';

function* login({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const response: UbittzResponse<LoginResponse> = yield authenticatedRequest.post('/login', {
      data: payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      yield put(loginSuccess(response.data));
      saveToken(response.data.token);
    } else {
      yield put(loginFailure('유저 정보가 맞지 않습니다.'));
    }
  } catch (e) {
    yield put(loginFailure((e as Error).message));
  }
}

function* fetchMe() {
  try {
    const response: UbittzResponse<AdminDetailResponse> = yield authenticatedRequest.get('/api/admin/detail/mine');

    if (response.ok) {
      yield put(fetchMeSuccess(response.data));
      saveMemberData(response.data);
    } else {
      yield put(fetchMeFailure('사용자 정보를 불러오는데 실패했습니다.'));
    }
  } catch (e) {
    yield put(fetchMeFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(loginRequest.type, login);
  yield takeLatest(fetchMeRequest.type, fetchMe);
}
