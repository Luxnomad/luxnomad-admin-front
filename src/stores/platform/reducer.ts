import { createAction } from '@reduxjs/toolkit';

import { PlatformCreateRequest, PlatformEditRequest } from '@@stores/platform/types';

const PREFIX = 'platform';

export const createPlatformRequest = createAction<PlatformCreateRequest>(`${PREFIX}/createPlatformRequest`);
export const createPlatformSuccess = createAction(`${PREFIX}/createPlatformSuccess`);
export const createPlatformFailure = createAction<string>(`${PREFIX}/createPlatformFailure`);

export const updatePlatformRequest = createAction<PlatformEditRequest>(`${PREFIX}/updatePlatformRequest`);
export const updatePlatformSuccess = createAction(`${PREFIX}/updatePlatformSuccess`);
export const updatePlatformFailure = createAction<string>(`${PREFIX}/updatePlatformFailure`);
