import styled from 'styled-components';

import Flex from '@@components/Flex';
import { FormGroupProps } from '@@components/FormGroup/types';

const StyledFormGroup = styled(Flex.Horizontal)`
  padding: 10px 0;
`;

function FormGroup({ id, label, children }: FormGroupProps) {
  return (
    <StyledFormGroup alignItems='center' gap={12}>
      {label && (
        <Flex.Horizontal flex={1}>
          <label htmlFor={id}>{label}</label>
        </Flex.Horizontal>
      )}
      <Flex.Horizontal flex={3}>{children}</Flex.Horizontal>
    </StyledFormGroup>
  );
}

export default FormGroup;
