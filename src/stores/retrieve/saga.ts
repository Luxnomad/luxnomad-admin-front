import { put, takeLatest } from 'redux-saga/effects';

import { cancelRetrieveRequest, cancelRetrieveSuccess, cancelRetrieveFailure } from '@@stores/retrieve/reducer';
import { authenticatedRequest } from '@@utils/request';
import { LuxnomadResponse } from '@@utils/request/types';

function* cancelRetrieve({ payload }: ReturnType<typeof cancelRetrieveRequest>) {
  try {
    const response: LuxnomadResponse<null> = yield authenticatedRequest.post('/admin/hotel/cancel', {
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

export default function* defaultSaga() {
  yield takeLatest(cancelRetrieveRequest.type, cancelRetrieve);
}
