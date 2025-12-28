import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ReactJson from 'react-json-view';
import styled from 'styled-components';

import Button from '@@components/Button';
import ButtonContainer from '@@components/ButtonContainer';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledHotelFullApiResponsePopup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  .cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 80%;
    max-height: 80%;
    background: #fff;
    border-radius: 12px;

    .popup__header {
      flex-shrink: 0;
      align-items: center;
      justify-content: flex-end;
      padding: 8px 12px;
      border-bottom: 1px solid ${COLORS.GRAY_SCALE_10};
    }

    .popup__body {
      flex: 1;
      overflow-y: scroll;
      padding: 12px;
    }

    .popup__footer {
      padding: 6px 12px;
      border-top: 1px solid ${COLORS.GRAY_SCALE_10};
      justify-content: space-between;
    }
  }
`;

function HotelFullApiResponsePopup({ data, onClose }: { data: object; onClose: () => void }) {
  const [viewer, setViewer] = useState<boolean>(false);

  // const handleClickCopy = () => {
  //   window.navigator.clipboard.writeText(JSON.stringify(data));
  // };

  const handleClickViewer = () => {
    setViewer((prev) => !prev);
  };

  const handleClickGpt = () => {
    window.open('https://chatgpt.com/g/g-691b20fd14ec8191a221337fecf165e6-json-interpreter-hotel-search');
  };

  return (
    <StyledHotelFullApiResponsePopup>
      <div className='cover' onClick={onClose} />
      <Flex.Vertical className='popup'>
        <Flex.Horizontal className='popup__header'>
          <div className='tw-cursor-pointer' onClick={onClose}>
            <CloseIcon style={{ fontSize: 30 }} />
          </div>
        </Flex.Horizontal>
        <div className='popup__body'>{viewer ? <ReactJson src={data} /> : <Typography.Body3>{JSON.stringify(data)}</Typography.Body3>}</div>
        <Flex.Horizontal className='popup__footer'>
          <ButtonContainer>
            {/* <Button.Medium onClick={handleClickCopy} theme='outline'>
              Copy
            </Button.Medium> */}
            <Button.Medium onClick={handleClickViewer}>{viewer ? 'View plain text' : 'View json viewer'}</Button.Medium>
          </ButtonContainer>
          <Button.Medium onClick={handleClickGpt}>Response Generator GPTs</Button.Medium>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledHotelFullApiResponsePopup>
  );
}

export default HotelFullApiResponsePopup;
