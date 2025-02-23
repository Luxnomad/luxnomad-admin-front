import { useContext } from 'react';

import { PopupContext } from '@@components/Popup/index';

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup는 PopupProvider 내부에서만 사용 가능합니다.');
  }
  return context;
};
