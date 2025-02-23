import { Tuple, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { actionMiddleware } from '@@store//middlewares/actionMiddleware';
import { rootReducers } from '@@store/reducers';
import { rootSagas } from '@@store/sagas';

const createStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const middlewares = [actionMiddleware, sagaMiddleWare];

  const store = configureStore({
    reducer: rootReducers,
    middleware: () => new Tuple(...middlewares, logger),
  });

  sagaMiddleWare.run(rootSagas);

  return store;
};

export const store = createStore();

export const { dispatch } = store;
