import styled, { keyframes } from 'styled-components';

import { ButtonProps, ButtonSize, ButtonTheme } from '@@components/Button/types';
import { COLORS } from '@@constants/colors';

const rotation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const StyledBasicButton = styled.button<{ $size: ButtonSize; $theme: ButtonTheme }>`
  position: relative;
  outline: none;
  border-radius: 4px;
  ${({ theme, $size }) => theme.button.size[$size]}
  ${({ theme, $theme }) => theme.button.theme[$theme]}
  ${({ theme, $size }) => theme.button.text[$size]}

  &:disabled {
    opacity: 0.6;
  }

  &.loading {
    &::after {
      display: block;
    }
  }

  &::after {
    content: '';
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    height: 80%;
    aspect-ratio: 1 / 1;

    border-radius: 50%;
    border-color: ${COLORS.GRAY_SCALE_10};
    border-style: solid;
    border-width: 5px 5px 5px 5px;
    border-top-color: transparent;

    animation: ${rotation} 1s linear infinite;
  }
`;

const BasicButton =
  (size: ButtonSize) =>
  ({ theme = 'primary', children, loading, disabled, className, ...props }: ButtonProps) => {
    const newClassName = `${className ?? ''} ${loading ? 'loading' : ''}`;

    return (
      <StyledBasicButton {...props} disabled={disabled || loading} type={props.type ?? 'button'} $size={size} $theme={theme} className={newClassName}>
        {children}
      </StyledBasicButton>
    );
  };

export default BasicButton;
