import { AxiosError } from 'axios';
import qs from 'qs';
import { put, takeLatest } from 'redux-saga/effects';

import { authenticatedRequest } from '@@utils/request';
import { LuxnomadResponse } from '@@utils/request/types';

import {
  fetchHotelRulesFailure,
  fetchHotelRulesRequest,
  fetchHotelRulesSuccess,
  confirmReservationRequest,
  confirmReservationSuccess,
  confirmReservationFailure,
  searchRoomRequest,
  searchRoomSuccess,
  searchRoomFailure,
} from './reducer';
import { HotelRulesResponse, RoomSearchResponse } from './types';

function* searchRoom({ payload }: ReturnType<typeof searchRoomRequest>) {
  try {
    const query = qs.stringify(payload);
    const response: LuxnomadResponse<RoomSearchResponse> = yield authenticatedRequest.get(`/admin/hotel/search?${query}`);

    if (response.ok) {
      yield put(searchRoomSuccess(response.data.body));
    } else {
      // @ts-ignore
      yield put(searchRoomFailure((response as AxiosError).response?.data.message));
    }
  } catch (e) {
    yield put(searchRoomFailure((e as Error).message));
  }
}

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

function* confirmReservation({ payload }: ReturnType<typeof confirmReservationRequest>) {
  try {
    const response: LuxnomadResponse<HotelRulesResponse> = yield authenticatedRequest.post('/admin/hotel/reservation', {
      data: payload,
    });

    if (response.ok) {
      yield put(confirmReservationSuccess());
    } else {
      //@ts-ignore
      yield put(confirmReservationFailure(response as AxiosError).response?.data.message ?? 'Failed to reservation');
    }
  } catch (e) {
    yield put(confirmReservationFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(searchRoomRequest.type, searchRoom);
  yield takeLatest(fetchHotelRulesRequest.type, fetchHotelRules);
  yield takeLatest(confirmReservationRequest.type, confirmReservation);
}
