import { createContext } from 'react';

import PopupProvider from '@@components/Popup/PopupContainer';
import { PopupContextType } from '@@components/Popup/types';

export const PopupContext = createContext<PopupContextType | undefined>(undefined);

export { PopupProvider };
