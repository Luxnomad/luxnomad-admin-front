import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BookState, HotelRulesResponse, ReservationRequest, RoomSearchRequest, RoomSearchResponse } from './types';

const name = 'book';

const initialState: BookState = {
  initialSearch: false,
};

export const searchRoomRequest = createAction<RoomSearchRequest>(`${name}/searchRoomRequest`);
export const searchRoomFailure = createAction<string>(`${name}/searchRoomFailure`);

export const fetchHotelRulesRequest = createAction<string>(`${name}/fetchHotelRulesRequest`);
export const fetchHotelRulesSuccess = createAction<HotelRulesResponse>(`${name}/fetchHotelRulesSuccess`);
export const fetchHotelRulesFailure = createAction<string>(`${name}/fetchHotelRulesFailure`);

export const confirmReservationRequest = createAction<ReservationRequest>(`${name}/confirmReservationRequest`);
export const confirmReservationSuccess = createAction(`${name}/confirmReservationSuccess`);
export const confirmReservationFailure = createAction<string>(`${name}/confirmReservationFailure`);

const bookSlice = createSlice({
  name,
  initialState,
  reducers: {
    searchRoomSuccess(state, { payload }: PayloadAction<RoomSearchResponse>) {
      state.roomResponse = payload;
      state.initialSearch = true;
    },
    resetRoomData(state) {
      state.roomResponse = undefined;
    },
    checkInitialSearch(state) {
      state.initialSearch = true;
    },
  },
});

export const { searchRoomSuccess, checkInitialSearch, resetRoomData } = bookSlice.actions;

export default bookSlice.reducer;
