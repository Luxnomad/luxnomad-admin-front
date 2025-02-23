import { createContext, ReactNode, useState } from 'react';

import { CheckedListContextType } from '@@context/CheckedListContext/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CheckedListContext = createContext<CheckedListContextType<any>>({} as any);

export function CheckedListProvider<Values>({ defaultValue, children }: { defaultValue: Values[]; children: ReactNode }) {
  const [checkedList, setCheckedList] = useState<Values[]>(defaultValue);
  return <CheckedListContext.Provider value={{ checkedList, setCheckedList }}>{children}</CheckedListContext.Provider>;
}
