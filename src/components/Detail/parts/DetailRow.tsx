import { ReactNode, Key } from 'react';

import styled from 'styled-components';

import DetailContent from '@@components/Detail/parts/DetailContent';
import DetailTitle from '@@components/Detail/parts/DetailTitle';
import { DetailRowProps } from '@@components/Detail/types';
import Flex from '@@components/Flex';

const StyledDetailRow = styled(Flex.Horizontal)<{ $size: number }>`
  width: ${({ $size }) => ($size / 12) * 100}%;
`;

function DetailRow<Data extends object>({ option, data }: DetailRowProps<Data>) {
  const { renderContent, size, name, title, single } = option;

  const generateContent = () => {
    if (Array.isArray(renderContent)) {
      return (
        <Flex.Vertical flex={1}>
          {renderContent.map((option) => (
            <DetailRow option={option} data={data} key={option.name as Key} />
          ))}
        </Flex.Vertical>
      );
    }

    return (
      <DetailContent>
        {(typeof renderContent === 'function' ? renderContent(data) : renderContent) ?? (data[name as keyof Data] as ReactNode) ?? '-'}
      </DetailContent>
    );
  };

  return (
    <StyledDetailRow $size={size ?? 12}>
      {!single && <DetailTitle required={option.required}>{title ?? (name as string)}</DetailTitle>}
      {generateContent()}
    </StyledDetailRow>
  );
}

export default DetailRow;
