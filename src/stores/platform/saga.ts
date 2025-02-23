import { put, takeLatest } from 'redux-saga/effects';

import {
  createPlatformRequest,
  createPlatformSuccess,
  createPlatformFailure,
  updatePlatformRequest,
  updatePlatformSuccess,
  updatePlatformFailure,
} from '@@stores/platform/reducer';
import { Platform } from '@@stores/platform/types';
import { authenticatedRequest } from '@@utils/request';
import { UbittzResponse } from '@@utils/request/types';

function* createPlatform({ payload }: ReturnType<typeof createPlatformRequest>) {
  try {
    const response: UbittzResponse<Platform> = yield authenticatedRequest.put('/api/platform/create', {
      data: payload,
    });

    const action = response.ok ? createPlatformSuccess() : createPlatformFailure('플랫폼 생성을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(createPlatformFailure((e as Error).message));
  }
}

function* updatePlatform({ payload }: ReturnType<typeof updatePlatformRequest>) {
  try {
    const response: UbittzResponse<Platform> = yield authenticatedRequest.patch('/api/platform/edit', {
      data: payload,
    });

    const action = response.ok ? updatePlatformSuccess() : updatePlatformFailure('플랫폼 수정을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(updatePlatformFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(createPlatformRequest.type, createPlatform);
  yield takeLatest(updatePlatformRequest.type, updatePlatform);
}
