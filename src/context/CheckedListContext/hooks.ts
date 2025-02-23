import { useContext } from 'react';

import { CheckedListContext } from '@@context/CheckedListContext';
import { CheckedListContextType } from '@@context/CheckedListContext/types';

export const useCheckedListContext = <Values>() => {
  return useContext<CheckedListContextType<Values>>(CheckedListContext);
};
