import { useSelector } from 'react-redux';

import { AppState } from '@@store/types';

export const useAppState = <T>(selector: (state: AppState) => T) => {
  return useSelector(selector);
};
