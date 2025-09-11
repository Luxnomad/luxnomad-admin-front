import { ReactNode } from 'react';

import styled from 'styled-components';

import { EditableDetailOption, EditableDetailProps } from '@@components/EditableDetail/types';
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

const StyledContent = styled(Flex.Vertical)`
  gap: 20px;
`;

function EditableDetail<Data extends object>({ title, data, options, isEdit = false }: EditableDetailProps<Data>) {
  const contentGenerator = (option: EditableDetailOption<Data>) => {
    const defaultValue = (data[option.name as keyof Data] as ReactNode) || '-';
    const { renderContent } = option;

    if (!renderContent) return defaultValue;
    return typeof renderContent === 'function' ? renderContent(data) : renderContent;
  };

  const inputContentGenerator = (option: EditableDetailOption<Data>) => {
    const defaultValue = (data[option.name as keyof Data] as ReactNode) || '-';
    const { renderInputContent } = option;

    if (!renderInputContent) return defaultValue;
    return typeof renderInputContent === 'function' ? renderInputContent(data) : renderInputContent;
  };

  const getContent = (option: EditableDetailOption<Data>) => {
    const defaultValue = contentGenerator(option);

    if (!isEdit || !option.isEditable) return defaultValue;
    return inputContentGenerator(option);
  };

  return (
    <Flex.Vertical gap={16}>
      <Typography.Subtitle1>{title}</Typography.Subtitle1>
      <StyledContent>
        {options.map((option) => (
          <StyledRow key={option.name as string}>
            <div>{option.title ?? (option.name as string)}</div>
            <div>{getContent(option) as ReactNode}</div>
          </StyledRow>
        ))}
      </StyledContent>
    </Flex.Vertical>
  );
}

export default EditableDetail;
