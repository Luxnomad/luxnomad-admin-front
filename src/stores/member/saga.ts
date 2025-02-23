import { put, takeLatest } from 'redux-saga/effects';

import {
  createMemberFailure,
  createMemberRequest,
  createMemberSuccess,
  updateMemberRequest,
  updateMemberSuccess,
  updateMemberFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
} from '@@stores/member/reducer';
import { authenticatedRequest } from '@@utils/request';
import { UbittzResponse } from '@@utils/request/types';

function* createMember({ payload }: ReturnType<typeof createMemberRequest>) {
  try {
    const response: UbittzResponse<string> = yield authenticatedRequest.put('/api/member/create', {
      data: payload,
    });

    const action = Math.floor(response.status / 100) === 2 ? createMemberSuccess(response.data) : createMemberFailure('유저 생성을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(createMemberFailure((e as Error).message));
  }
}

function* updateMember({ payload }: ReturnType<typeof updateMemberRequest>) {
  try {
    const response: UbittzResponse<string> = yield authenticatedRequest.patch(`/api/member/edit`, {
      data: payload,
    });

    const action = Math.floor(response.status / 100) === 2 ? updateMemberSuccess(response.data) : updateMemberFailure('유저 수정을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(updateMemberFailure((e as Error).message));
  }
}

function* resetPassword({ payload }: ReturnType<typeof resetPasswordRequest>) {
  try {
    const response: UbittzResponse<string> = yield authenticatedRequest.patch(`/api/member/edit/init-password`, {
      data: {
        code: payload,
      },
    });

    const action =
      Math.floor(response.status / 100) === 2 ? resetPasswordSuccess(response.data) : resetPasswordFailure('비밀번호 초기화를 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(resetPasswordFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(createMemberRequest.type, createMember);
  yield takeLatest(updateMemberRequest.type, updateMember);
  yield takeLatest(resetPasswordRequest.type, resetPassword);
}
