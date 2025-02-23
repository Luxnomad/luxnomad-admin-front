import styled from 'styled-components';

const StyledSliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;

  .slider_dot {
    width: 6px;
    height: 6px;
    border-radius: 3px;

    background: #eee;

    &.slider_dot-active {
      background: #999;
    }
  }
`;

function SliderNavigation({ currentIndex, length }: { currentIndex: number; length: number }) {
  return (
    <StyledSliderNavigation className='slider_dots__wrap'>
      {Array.from({ length }).map((_, index) => (
        <div key={index} className={`slider_dot ${currentIndex === index && 'slider_dot-active'}`} />
      ))}
    </StyledSliderNavigation>
  );
}

export default SliderNavigation;
