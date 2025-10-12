import React, { useState } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { PopupContext } from '@@components/Popup';
import { POPUP_TYPE_ICON } from '@@components/Popup/constants';
import { PopupOptions } from '@@components/Popup/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  padding: 20px;
  z-index: 1000;

  .popup_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    min-height: 200px;
    padding: 20px;
    background: ${COLORS.GRAY_SCALE_05};
    border-radius: 12px;

    .popup_box__content {
      text-align: center;
      flex: 1;
      padding-top: 16px;
      word-break: break-all;
    }
    .popup_box__button {
      width: 180px;
    }

    .popup_box__cancel {
      width: 180px;
      background-color: ${COLORS.GRAY_SCALE_05};
      color: ${COLORS.GRAY_SCALE_80};
    }
  }
`;

function PopupProvider({ children }: { children: React.ReactNode }) {
  const [popupState, setPopupState] = useState<{ content: React.ReactNode; options: PopupOptions } | null>(null);

  const showPopup = (content: React.ReactNode, options: PopupOptions = { buttons: [] }) => {
    setPopupState({ content, options });
  };

  const hidePopup = () => setPopupState(null);

  const handleButtonClick = (onClick?: () => void) => () => {
    onClick?.();
    hidePopup();
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      hidePopup();
    }
  };

  const Icon = popupState?.options.type ? POPUP_TYPE_ICON[popupState.options.type] : null;

  return (
    <PopupContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      {popupState && (
        <StyledPopup onClick={handleBackgroundClick}>
          <Flex.Vertical className='popup_box' alignItems='center'>
            {Icon && <Icon />}
            <Typography.Subtitle1 className='popup_box__content'>{popupState.content}</Typography.Subtitle1>
            <Flex.Horizontal gap={12}>
              {popupState.options.buttons?.map((button, index) => (
                <Button.Medium key={index} className='popup_box__button' type='button' onClick={handleButtonClick(button.onClick)}>
                  {button.text}
                </Button.Medium>
              ))}
              {popupState.options.onCancel && (
                <Button.Medium className='popup_box__cancel' type='button' onClick={hidePopup}>
                  취소
                </Button.Medium>
              )}
            </Flex.Horizontal>
          </Flex.Vertical>
        </StyledPopup>
      )}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
