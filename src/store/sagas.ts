import { all, fork } from 'redux-saga/effects';

import bookSaga from '@@stores/book/saga';
import retrieveSaga from '@@stores/retrieve/saga';

export function* rootSagas() {
  yield all([bookSaga, retrieveSaga].map((saga) => fork(saga)));
}
