import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

const StyledDetailTitle = styled(Flex.Horizontal)`
  align-items: center;

  width: 140px;
  min-height: 48px;
  background: ${COLORS.GRAY_SCALE_05};

  padding: 13px 12px;
  border-left: 1px solid ${COLORS.GRAY_SCALE_10};
  border-top: 1px solid ${COLORS.GRAY_SCALE_10};

  ${({ theme }) => theme.typography.Body3}
  color: ${COLORS.GRAY_SCALE_60};

  & > div {
    display: flex;

    .title__content {
      overflow-wrap: break-word;
    }

    .required_mark {
      margin-left: 4px;
      color: #b81428;
    }
  }
`;

function DetailTitle({ required, children }: PropsWithChildren<{ required?: boolean }>) {
  return (
    <StyledDetailTitle>
      <div>
        <div className='title__content'>{children}</div>
        {required && <span className='required_mark'>*</span>}
      </div>
    </StyledDetailTitle>
  );
}

export default DetailTitle;
