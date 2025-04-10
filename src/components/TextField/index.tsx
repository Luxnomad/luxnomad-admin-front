import styled from 'styled-components';

import { TextFieldProps } from '@@components/TextField/types';
import { COLORS } from '@@constants/colors';

const TextField = styled.input<TextFieldProps>`
  outline: none;
  padding: 8px;
  border: 1px solid #e2e5e9;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  width: 100%;

  color: ${COLORS.GRAY_SCALE_80};

  &::placeholder {
    color: ${COLORS.GRAY_SCALE_30};
  }

  &:not(:placeholder-shown) {
    border-color: ${COLORS.GRAY_SCALE_10};
  }

  &:read-only {
    color: ${COLORS.GRAY_SCALE_30};
    background: ${COLORS.GRAY_SCALE_10};
    border: none;
  }
`;

export default TextField;
