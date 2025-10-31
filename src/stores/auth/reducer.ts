import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, LoginDTO, LoginResponse, AdminDetailResponse } from '@@stores/auth/types';
import { clearMemberData, clearToken, getAccessToken, getMemberData } from '@@utils/localStorage';

const userData = getMemberData();

const initialState: AuthState = {
  token: getAccessToken() ?? undefined,

  permission: userData?.permission ?? [],
  id: userData?.id ?? '',
  email: userData?.email ?? '',
  name: userData?.name ?? '',
  type: userData?.type,
  shouldFetchMe: !userData,
};

const PREFIX = 'auth';

export const loginRequest = createAction<LoginDTO>(`${PREFIX}/loginRequest`);
export const loginFailure = createAction<string>(`${PREFIX}/loginFailure`);

export const fetchMeRequest = createAction(`${PREFIX}/fetchMeRequest`);
export const fetchMeFailure = createAction<string>(`${PREFIX}/fetchMeFailure`);

const authSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    loginSuccess(state, { payload: { access_token } }: PayloadAction<LoginResponse>) {
      state.token = access_token;
    },
    setTokens(state, { payload: { access_token } }: PayloadAction<LoginResponse>) {
      state.token = access_token;
    },
    logoutRequest(state) {
      state.token = undefined;
      state.permission = [];
      state.id = '';
      state.email = '';
      state.name = '';
      state.type = undefined;
      state.shouldFetchMe = true;
      clearToken();
      clearMemberData();
    },
    fetchMeSuccess(state, { payload }: PayloadAction<AdminDetailResponse>) {
      state.permission = payload.permission;
      state.id = payload.id;
      state.email = payload.email;
      state.name = payload.name;
      state.type = payload.type;
      state.shouldFetchMe = false;
    },
  },
});

export const { loginSuccess, setTokens, logoutRequest, fetchMeSuccess } = authSlice.actions;

export default authSlice.reducer;
