import { all, fork } from 'redux-saga/effects';

import adminSaga from '@@stores/admin/saga';
import authSaga from '@@stores/auth/saga';
import memberSaga from '@@stores/member/saga';
import orderProductSaga from '@@stores/orderProduct/saga';
import platformSaga from '@@stores/platform/saga';
import productSaga from '@@stores/product/saga';

export function* rootSagas() {
  yield all([authSaga, platformSaga, productSaga, memberSaga, adminSaga, orderProductSaga].map((saga) => fork(saga)));
}
