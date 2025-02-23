import { createAction } from '@reduxjs/toolkit';

import { ProductCreateRequest, ProductEditRequest } from '@@stores/product/types';

const PREFIX = 'product';

export const createProductRequest = createAction<ProductCreateRequest>(`${PREFIX}/createProductRequest`);
export const createProductSuccess = createAction(`${PREFIX}/createProductSuccess`);
export const createProductFailure = createAction<string>(`${PREFIX}/createProductFailure`);

export const updateProductRequest = createAction<ProductEditRequest>(`${PREFIX}/updateProductRequest`);
export const updateProductSuccess = createAction(`${PREFIX}/updateProductSuccess`);
export const updateProductFailure = createAction<string>(`${PREFIX}/updateProductFailure`);

export const deleteProductRequest = createAction<string[]>(`${PREFIX}/deleteProductRequest`);
export const deleteProductSuccess = createAction(`${PREFIX}/deleteProductSuccess`);
export const deleteProductFailure = createAction<string>(`${PREFIX}/deleteProductFailure`);
