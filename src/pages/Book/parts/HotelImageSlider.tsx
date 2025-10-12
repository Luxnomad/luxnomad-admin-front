import { useRef, useState } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';

import Slider from '@@components/Slider';

const StyledHotelImageSlider = styled.div`
  position: relative;
  .hotel__image > img {
    width: 100%;
    aspect-ratio: 350 / 233;
    object-fit: cover;
  }

  .navigator__wrap {
    position: absolute;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    z-index: 1;
    opacity: 0;
    transition: 0.2s opacity;

    & > div {
      display: flex;
      align-items: center;
      background: #ffffff80;
      padding: 0 6px;
    }
  }

  &:hover {
    .navigator__wrap {
      opacity: 1;
    }
  }
`;

function HotelImageSlider({ images }: { images: string[] }) {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState<number>(0);

  const handleClickBack = () => {
    //@ts-ignore
    sliderRef.current?.slickGoTo(index === 0 ? images.length - 1 : index - 1);
  };

  const handleClickNext = () => {
    //@ts-ignore
    sliderRef.current?.slickGoTo(index >= images.length - 1 ? 0 : index + 1);
  };

  return (
    <StyledHotelImageSlider>
      <div className='navigator__wrap'>
        <div onClick={handleClickBack}>
          <ArrowBackIosIcon />
        </div>
        <div onClick={handleClickNext}>
          <ArrowForwardIosIcon />
        </div>
      </div>
      <Slider
        ref={sliderRef}
        sliderProps={{
          beforeChange: (_, index) => {
            setIndex(index);
          },
        }}
        items={images.map((image) => (
          <div className='hotel__image'>
            <img src={image} />
          </div>
        ))}
      />
    </StyledHotelImageSlider>
  );
}

export default HotelImageSlider;
