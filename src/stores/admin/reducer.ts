import { createAction } from '@reduxjs/toolkit';

import { AdminCreateRequest, AdminDetailResponse } from '@@stores/admin/types';

const PREFIX = 'admin';

export const createAdminRequest = createAction<AdminCreateRequest>(`${PREFIX}/createAdminRequest`);
export const createAdminSuccess = createAction<AdminDetailResponse>(`${PREFIX}/createAdminSuccess`);
export const createAdminFailure = createAction<string>(`${PREFIX}/createAdminFailure`);
