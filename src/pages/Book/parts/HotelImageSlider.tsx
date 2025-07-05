import styled from 'styled-components';

import Slider from '@@components/Slider';

const StyledHotelImageSlider = styled.div`
  .hotel__image > img {
    width: 100%;
    aspect-ratio: 350 / 233;
    object-fit: cover;
  }
`;

function HotelImageSlider({ images }: { images: string[] }) {
  return (
    <StyledHotelImageSlider>
      <Slider
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
