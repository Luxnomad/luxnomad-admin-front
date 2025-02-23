import styled from 'styled-components';

import Flex from '@@components/Flex';
import { FlexProps } from '@@components/Flex/types';

const StyledFilterContainer = styled(Flex.Vertical)`
  border-bottom: 1px solid #888;
  padding-bottom: 12px;
  margin-bottom: 20px;
`;

function FilterContainer(props: FlexProps) {
  return <StyledFilterContainer {...props} gap={8} />;
}

export default FilterContainer;
