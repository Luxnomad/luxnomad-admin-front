import { Key } from 'react';

import styled from 'styled-components';

import DetailRow from '@@components/Detail/parts/DetailRow';
import { DetailProps } from '@@components/Detail/types';
import Flex from '@@components/Flex';
import Title from '@@components/Title';
import { COLORS } from '@@constants/colors';

const StyledDetailBox = styled(Flex.Horizontal)`
  flex-wrap: wrap;
  border-right: 1px solid ${COLORS.GRAY_SCALE_10};
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_10};
`;

function Detail<Data extends object>({ title, data, options, headerContent }: DetailProps<Data>) {
  return (
    <Flex.Vertical>
      {title && <Title>{title}</Title>}
      {headerContent && headerContent}
      <StyledDetailBox>
        {options.map((option) => {
          if (option.hidden) {
            return null;
          }
          return <DetailRow option={option} data={data} key={option.name as Key} />;
        })}
      </StyledDetailBox>
    </Flex.Vertical>
  );
}

export default Detail;
