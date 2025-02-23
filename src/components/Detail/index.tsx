import { ReactNode } from 'react';

import styled from 'styled-components';

import { DetailProps } from '@@components/Detail/types';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledRow = styled(Flex.Horizontal)`
  flex-wrap: wrap;
  overflow: hidden;

  & > div:first-child {
    flex: 1;
  }

  & > div:last-child {
    flex: 2;
    overflow: hidden;
    word-wrap: break-word;
  }
`;

function Detail<Data extends object>({ title, data, options }: DetailProps<Data>) {
  return (
    <Flex.Vertical gap={16}>
      <Typography.Subtitle1>{title}</Typography.Subtitle1>
      <Flex.Vertical gap={20}>
        {options.map(({ name, title, renderContent }) => {
          const renderedContent = typeof renderContent === 'function' ? renderContent(data) : renderContent;

          return (
            <StyledRow key={name as string}>
              <div>{title ?? (name as string)}</div>
              <div>{renderedContent ?? ((data[name as keyof Data] as ReactNode) || '-')}</div>
            </StyledRow>
          );
        })}
      </Flex.Vertical>
    </Flex.Vertical>
  );
}

export default Detail;
