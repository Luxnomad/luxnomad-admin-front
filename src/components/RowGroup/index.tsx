import styled from 'styled-components';

import Flex from '@@components/Flex';
import { RowGroupProps } from '@@components/RowGroup/types';

const StyledRowGroup = styled(Flex.Horizontal)`
  padding: 12px 0;

  & > label {
    flex: 1;
  }
`;

function RowGroup({ children, label }: RowGroupProps) {
  return (
    <StyledRowGroup alignItems='center' gap={12}>
      {label && (
        <Flex.Horizontal flex={1}>
          <label>{label}</label>
        </Flex.Horizontal>
      )}
      {children}
    </StyledRowGroup>
  );
}

export default RowGroup;
