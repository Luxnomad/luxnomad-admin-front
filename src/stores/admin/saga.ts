import { put, takeLatest } from 'redux-saga/effects';

import { createAdminRequest, createAdminSuccess, createAdminFailure } from '@@stores/admin/reducer';
import { AdminDetailResponse } from '@@stores/admin/types';
import { authenticatedRequest } from '@@utils/request';
import { UbittzResponse } from '@@utils/request/types';

function* createAdmin({ payload }: ReturnType<typeof createAdminRequest>) {
  try {
    const response: UbittzResponse<AdminDetailResponse> = yield authenticatedRequest.put('/api/admin/create', {
      data: payload,
    });

    const action = response.ok ? createAdminSuccess(response.data) : createAdminFailure('Admin 생성을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(createAdminFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(createAdminRequest.type, createAdmin);
}
