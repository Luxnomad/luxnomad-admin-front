import styled from 'styled-components';

import Flex from '@@components/Flex';
import { FlexProps } from '@@components/Flex/types';
import { COLORS } from '@@constants/colors';

const StyledFilterContainer = styled(Flex.Vertical)`
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_20};
  padding-bottom: 12px;
  margin-bottom: 20px;
`;

function FilterContainer(props: FlexProps) {
  return <StyledFilterContainer {...props} gap={8} />;
}

export default FilterContainer;
