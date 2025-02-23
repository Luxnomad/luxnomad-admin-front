import { put, takeLatest } from 'redux-saga/effects';

import { ORDER_STATUS } from '@@stores/order/constants';
import { confirmOrderFailure, confirmOrderRequest, confirmOrderSuccess } from '@@stores/orderProduct/reducer';
import { authenticatedRequest } from '@@utils/request';
import { UbittzResponse } from '@@utils/request/types';

function* confirmOrder({ payload }: ReturnType<typeof confirmOrderRequest>) {
  try {
    const response: UbittzResponse<string> = yield authenticatedRequest.patch('/api/order-product/edit/status', {
      data: {
        ids: payload,
        status: ORDER_STATUS.SHIPPING,
      },
    });

    if (response.ok) {
      yield put(confirmOrderSuccess());
    } else {
      yield put(confirmOrderFailure('발송 완료 처리를 실패했습니다.'));
    }
  } catch (e) {
    yield put(confirmOrderFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(confirmOrderRequest.type, confirmOrder);
}
