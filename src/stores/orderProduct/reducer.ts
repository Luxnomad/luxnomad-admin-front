import { createAction } from '@reduxjs/toolkit';

import { OrderProductId } from '@@stores/orderProduct/types';

const PREFIX = 'orderProduct';

export const confirmOrderRequest = createAction<OrderProductId[]>(`${PREFIX}/confirmOrderRequest`);
export const confirmOrderSuccess = createAction(`${PREFIX}/confirmOrderSuccess`);
export const confirmOrderFailure = createAction<string>(`${PREFIX}/confirmOrderFailure`);
