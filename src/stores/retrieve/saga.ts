import { put, takeLatest } from 'redux-saga/effects';

import {
  cancelRetrieveRequest,
  cancelRetrieveSuccess,
  cancelRetrieveFailure,
  modifyRetrieveRequest,
  modifyRetrieveSuccess,
  modifyRetrieveFailure,
} from '@@stores/retrieve/reducer';
import { authenticatedRequest } from '@@utils/request';
import { LuxnomadResponse } from '@@utils/request/types';

function* cancelRetrieve({ payload }: ReturnType<typeof cancelRetrieveRequest>) {
  try {
    const response: LuxnomadResponse<null> = yield authenticatedRequest.put('/admin/hotel/cancel', {
      data: payload,
    });

    if (response.ok) {
      yield put(cancelRetrieveSuccess());
    } else {
      yield put(cancelRetrieveFailure(response.data.message ?? 'Cancellation failed.'));
    }
  } catch (e) {
    yield put(cancelRetrieveFailure((e as Error).message));
  }
}

function* modifyRetrieve({ payload: { request, reservationId } }: ReturnType<typeof modifyRetrieveRequest>) {
  try {
    const response: LuxnomadResponse<null> = yield authenticatedRequest.put(`/admin/hotel/modify/${reservationId}`, {
      data: request,
    });

    if (response.ok) {
      yield put(modifyRetrieveSuccess());
    } else {
      yield put(modifyRetrieveFailure(response.data.message ?? 'Modify request failed.'));
    }
  } catch (e) {
    yield put(modifyRetrieveFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(cancelRetrieveRequest.type, cancelRetrieve);
  yield takeLatest(modifyRetrieveRequest.type, modifyRetrieve);
}
