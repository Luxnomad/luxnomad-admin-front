import { createAction } from '@reduxjs/toolkit';

import { MemberCreateRequest, MemberEditRequest } from '@@stores/member/types';

const PREFIX = 'member';

export const createMemberRequest = createAction<MemberCreateRequest>(`${PREFIX}/createMemberRequest`);
export const createMemberSuccess = createAction<string>(`${PREFIX}/createMemberSuccess`);
export const createMemberFailure = createAction<string>(`${PREFIX}/createMemberFailure`);

export const updateMemberRequest = createAction<MemberEditRequest>(`${PREFIX}/updateMemberRequest`);
export const updateMemberSuccess = createAction<string>(`${PREFIX}/updateMemberSuccess`);
export const updateMemberFailure = createAction<string>(`${PREFIX}/updateMemberFailure`);

export const resetPasswordRequest = createAction<string>(`${PREFIX}/resetPasswordRequest`);
export const resetPasswordSuccess = createAction<string>(`${PREFIX}/resetPasswordSuccess`);
export const resetPasswordFailure = createAction<string>(`${PREFIX}/resetPasswordFailure`);
