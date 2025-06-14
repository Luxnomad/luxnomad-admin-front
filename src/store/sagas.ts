import { all, fork } from 'redux-saga/effects';

import adminSaga from '@@stores/admin/saga';
import authSaga from '@@stores/auth/saga';

export function* rootSagas() {
  yield all([authSaga, adminSaga].map((saga) => fork(saga)));
}
