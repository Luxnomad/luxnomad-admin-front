import { useEffect } from 'react';

import { Middleware } from '@reduxjs/toolkit';
import { Action } from 'redux-actions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SubscribeCallback = (payload: any) => void;

interface SubscribeAction {
  type: string;
  callback: SubscribeCallback;
}

interface SubscribeStore {
  subscribeActions: SubscribeAction[];
  addSubscribeAction: (type: string, callback: SubscribeCallback) => () => void;
}

const subscribeStore: SubscribeStore = {
  subscribeActions: [],
  addSubscribeAction(type, callback) {
    const action = {
      type,
      callback,
    };

    this.subscribeActions.push(action);

    return () => {
      const index = this.subscribeActions.findIndex(({ type }) => type === action.type);
      this.subscribeActions.splice(index, 1);
    };
  },
};

export const actionMiddleware: Middleware = () => (next) => (action) => {
  next(action);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { type } = action as Action<any>;

  subscribeStore.subscribeActions.forEach((item) => {
    if (item.type === type) {
      item.callback(action);
    }
  });
};

export const useActionSubscribe = <T>({ type, callback }: { type: string; callback: (payload: T) => void }) => {
  useEffect(() => {
    const unsubscribe = subscribeStore.addSubscribeAction(type, callback);

    return unsubscribe;
  }, [type, callback]);
};
