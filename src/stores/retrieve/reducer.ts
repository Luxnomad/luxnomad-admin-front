import { createAction } from '@reduxjs/toolkit';

import { CancelRequest, ModifyRequest } from './types';

const name = 'retrieve';

export const cancelRetrieveRequest = createAction<CancelRequest>(`${name}/cancelRetrieveRequest`);
export const cancelRetrieveSuccess = createAction(`${name}/cancelRetrieveSuccess`);
export const cancelRetrieveFailure = createAction<string>(`${name}/cancelRetrieveFailure`);

export const modifyRetrieveRequest = createAction<{ request: ModifyRequest; reservationId: string }>(`${name}/modifyRetrieveRequest`);
export const modifyRetrieveSuccess = createAction(`${name}/modifyRetrieveSuccess`);
export const modifyRetrieveFailure = createAction<string>(`${name}/modifyRetrieveFailure`);
