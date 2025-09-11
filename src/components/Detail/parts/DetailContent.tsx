import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

const StyledDetailContent = styled(Flex.Horizontal)`
  flex: 1;

  align-items: center;
  min-height: 48px;
  padding: 13px 12px;

  border-left: 1px solid ${COLORS.GRAY_SCALE_10};
  border-top: 1px solid ${COLORS.GRAY_SCALE_10};

  ${({ theme }) => theme.typography.Body3}
`;

function DetailContent({ children }: PropsWithChildren) {
  return <StyledDetailContent>{children}</StyledDetailContent>;
}

export default DetailContent;
