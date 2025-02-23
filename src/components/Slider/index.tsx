import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import Slick from 'react-slick';
import styled from 'styled-components';

import SliderNavigation from '@@components/Slider/SliderNavigation';
import { SliderProps } from '@@components/Slider/types';

const StyledSlider = styled.div<{ $currentIndex: number; $size?: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .slider__slick_wrap {
    ${({ $size }) => $size && `width: ${$size}px;`}
  }
`;

const StyledSlick = styled(Slick)<{ gap: number }>`
  /* Slider Item에게 Gap을 주기 위한 속성들 */
  .slick-list {
    margin: 0 -${({ gap }) => gap / 2}px;
    .slick-slide > div {
      padding: 0 ${({ gap }) => gap / 2}px;
    }
  }
`;

function Slider({ items, gap = 0, itemSize, sliderProps, ...props }: SliderProps) {
  const [index, setIndex] = useState<number>(0);

  const dots = sliderProps?.dots ?? true;

  return (
    <StyledSlider $currentIndex={index} $size={itemSize} {...props}>
      <div className='slider__slick_wrap'>
        <StyledSlick
          gap={gap ?? 0}
          dots={false}
          infinite={false}
          arrows={false}
          {...sliderProps}
          beforeChange={(currentIndex, nextIndex) => {
            setIndex(nextIndex);
            sliderProps?.beforeChange?.(currentIndex, nextIndex);
          }}
        >
          {items}
        </StyledSlick>
      </div>
      {dots && <SliderNavigation currentIndex={index} length={items.length} />}
    </StyledSlider>
  );
}

export default Slider;
