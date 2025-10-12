import styled from 'styled-components';

import Flex from '@@components/Flex';
import { TextFieldProps } from '@@components/TextField/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledTextField = styled(Flex.Vertical)`
  button {
    padding: 0 15px;
  }

  .textfield__error_message {
    animation: fadeIn 0.2s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0 16px;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: #868686;
  background: #fff;
  border-radius: 4px;
  outline: none;

  ${({ theme }) => theme.typography.Body3}

  transition: border-color 0.2s;

  &:disabled {
    background: #31363f;
    color: #4b5362;
  }

  &.error {
    border-color: ${COLORS.RED_50};
  }
`;

function TextField({ label, errorMessage, className, ...inputProps }: TextFieldProps) {
  const newErrorMessage = `${className} ${errorMessage ? 'error' : ''}`;

  return (
    <StyledTextField className={newErrorMessage} gap={8}>
      {label && <Typography.Subtitle1>{label}</Typography.Subtitle1>}
      <Flex.Horizontal gap={8}>
        <StyledInput className={newErrorMessage} {...inputProps} />
      </Flex.Horizontal>
      {errorMessage && (
        <Typography.Caption1 className='textfield__error_message' color={COLORS.RED_50}>
          *{errorMessage}
        </Typography.Caption1>
      )}
    </StyledTextField>
  );
}

export default TextField;
