import { Dispatch, SetStateAction } from 'react';

export interface CheckedListContextType<Values> {
  checkedList: Values[];
  setCheckedList: Dispatch<SetStateAction<Values[]>>;
}
