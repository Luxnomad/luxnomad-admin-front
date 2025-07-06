import { createAction } from '@reduxjs/toolkit';

import { HotelRulesResponse } from './types';

const name = 'book';

export const fetchHotelRulesRequest = createAction<string>(`${name}/fetchHotelRulesRequest`);
export const fetchHotelRulesSuccess = createAction<HotelRulesResponse>(`${name}/fetchHotelRulesSuccess`);
export const fetchHotelRulesFailure = createAction<string>(`${name}/fetchHotelRulesFailure`);
