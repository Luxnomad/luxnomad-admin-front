import { AuthState } from '@@stores/auth/types';
import { BookState } from '@@stores/book/types';
import { HomeState } from '@@stores/home/types';

export interface AppState {
  auth: AuthState;
  home: HomeState;
  book: BookState;
}
