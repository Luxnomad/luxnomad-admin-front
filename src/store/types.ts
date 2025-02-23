import { AuthState } from '@@stores/auth/types';
import { HomeState } from '@@stores/home/types';

export interface AppState {
  auth: AuthState;
  home: HomeState;
}
