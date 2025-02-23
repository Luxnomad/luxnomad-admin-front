import { Clear } from '@mui/icons-material';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { ImageBoxProps } from '@@components/ImageBox/types';
import { COLORS } from '@@constants/colors';

const StyledImageBox = styled(Flex.Horizontal)<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid ${COLORS.GRAY_SCALE_20};
  border-radius: 4px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .review__delete {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -5px;
    right: -5px;
    background: ${COLORS.GRAY_SCALE_05};
    border-radius: 50%;

    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`;

function ImageBox({ imageUrl, size, onDelete }: ImageBoxProps) {
  return (
    <StyledImageBox size={size} justifyContent='center' alignItems='center'>
      <img src={imageUrl} alt='Preview' />
      <Flex.Horizontal className='review__delete' alignItems='center' justifyContent='center'>
        <Clear onClick={onDelete} />
      </Flex.Horizontal>
    </StyledImageBox>
  );
}

export default ImageBox;
