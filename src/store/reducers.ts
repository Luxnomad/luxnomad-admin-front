import { combineReducers } from 'redux';

import auth from '@@stores/auth/reducer';
import book from '@@stores/book/reducer';
import home from '@@stores/home/reducer';

export const rootReducers = combineReducers({ auth, home, book });
