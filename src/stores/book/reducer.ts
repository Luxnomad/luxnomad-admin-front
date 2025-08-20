import { createAction } from '@reduxjs/toolkit';

import { HotelRulesResponse, ReservationRequest } from './types';

const name = 'book';

export const fetchHotelRulesRequest = createAction<string>(`${name}/fetchHotelRulesRequest`);
export const fetchHotelRulesSuccess = createAction<HotelRulesResponse>(`${name}/fetchHotelRulesSuccess`);
export const fetchHotelRulesFailure = createAction<string>(`${name}/fetchHotelRulesFailure`);

export const confirmReservationRequest = createAction<ReservationRequest>(`${name}/confirmReservationRequest`);
export const confirmReservationSuccess = createAction(`${name}/confirmReservationSuccess`);
export const confirmReservationFailure = createAction<string>(`${name}/confirmReservationFailure`);
