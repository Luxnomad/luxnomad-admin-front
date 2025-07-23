import { put, takeLatest } from 'redux-saga/effects';

import { authenticatedRequest } from '@@utils/request';
import { LuxnomadResponse } from '@@utils/request/types';

import { fetchHotelRulesFailure, fetchHotelRulesRequest, fetchHotelRulesSuccess } from './reducer';
import { HotelRulesResponse } from './types';

function* fetchHotelRules({ payload }: ReturnType<typeof fetchHotelRulesRequest>) {
  try {
    const response: LuxnomadResponse<HotelRulesResponse> = yield authenticatedRequest.get('/admin/hotel/rule', {
      headers: {
        'Offer-Identifier': payload,
      },
    });

    if (response.ok) {
      yield put(fetchHotelRulesSuccess(response.data.body));
    } else {
      yield put(fetchHotelRulesFailure('Failed to fetch room rules.'));
    }
  } catch (e) {
    yield put(fetchHotelRulesFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(fetchHotelRulesRequest.type, fetchHotelRules);
}
