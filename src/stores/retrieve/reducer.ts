import { createAction } from '@reduxjs/toolkit';

import { CancelRequest } from './types';

const name = 'retrieve';

export const cancelRetrieveRequest = createAction<CancelRequest>(`${name}/cancelRetrieveRequest`);
export const cancelRetrieveSuccess = createAction(`${name}/cancelRetrieveSuccess`);
export const cancelRetrieveFailure = createAction<string>(`${name}/cancelRetrieveFailure`);
