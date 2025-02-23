import { put, takeLatest } from 'redux-saga/effects';

import {
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
} from '@@stores/product/reducer';
import { Product } from '@@stores/product/types';
import { authenticatedRequest } from '@@utils/request';
import { UbittzResponse } from '@@utils/request/types';

function* createProduct({ payload }: ReturnType<typeof createProductRequest>) {
  try {
    const response: UbittzResponse<Product> = yield authenticatedRequest.put('api/product/create', {
      data: payload,
    });

    const action = Math.floor(response.status / 100) === 2 ? createProductSuccess() : createProductFailure('상품 생성을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(createProductFailure((e as Error).message));
  }
}

function* updateProduct({ payload }: ReturnType<typeof updateProductRequest>) {
  try {
    const response: UbittzResponse<Product> = yield authenticatedRequest.patch('api/product/edit', {
      data: payload,
    });

    const action = Math.floor(response.status / 100) === 2 ? updateProductSuccess() : updateProductFailure('상품 수정을 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(updateProductFailure((e as Error).message));
  }
}

function* deleteProduct({ payload }: ReturnType<typeof deleteProductRequest>) {
  try {
    const response: UbittzResponse<Product[]> = yield authenticatedRequest.delete('/product', { data: { productIds: payload } });

    const action = Math.floor(response.status / 100) === 2 ? deleteProductSuccess() : deleteProductFailure('상품 삭제를 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(deleteProductFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(createProductRequest.type, createProduct);
  yield takeLatest(updateProductRequest.type, updateProduct);
  yield takeLatest(deleteProductRequest.type, deleteProduct);
}
