import { all, fork } from 'redux-saga/effects';

import authSaga from '@@stores/auth/saga';
import bookSaga from '@@stores/book/saga';
import retrieveSaga from '@@stores/retrieve/saga';

export function* rootSagas() {
  yield all([authSaga, bookSaga, retrieveSaga].map((saga) => fork(saga)));
}
