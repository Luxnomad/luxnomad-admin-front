import { all, fork } from 'redux-saga/effects';

import bookSaga from '@@stores/book/saga';

export function* rootSagas() {
  yield all([bookSaga].map((saga) => fork(saga)));
}
