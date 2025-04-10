import styled from 'styled-components';

import { FilterGroupProps } from '@@components/FilterGroup/types';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledFormGroup = styled(Flex.Vertical)`
  width: 100%;
`;

const StyledLabel = styled(Typography.Caption1)`
  color: ${COLORS.GRAY_SCALE_60};
  margin-bottom: 4px;
`;

const StyledErrorMessage = styled(Typography.Caption1)`
  margin-top: 4px;
  color: ${COLORS.RED_60};
  opacity: 0;
  animation: fadeIn 0.5s forwards;

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

function FilterGroup({ id, label, children, errorMessage }: FilterGroupProps) {
  return (
    <StyledFormGroup>
      {label && <StyledLabel id={id}>{label}</StyledLabel>}
      {children}
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledFormGroup>
  );
}

export default FilterGroup;
