import { Form, useFormikContext } from 'formik';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import TextArea from '@@components/TextArea';
import Title from '@@components/Title';

import { BookHistoryMemoForm } from '../types';

function BookHistoryDetailMemoFormContent() {
  const { getFieldProps, isValid, handleSubmit } = useFormikContext<BookHistoryMemoForm>();

  return (
    <Form onSubmit={handleSubmit}>
      <Flex.Vertical>
        <Title>Special Request</Title>
        <Flex.Vertical gap={8}>
          <TextArea {...getFieldProps('memo')} placeholder='Please enter the memo content. (English Only)' />
          <Button.Medium disabled={!isValid}>Modify Memo</Button.Medium>
        </Flex.Vertical>
      </Flex.Vertical>
    </Form>
  );
}

export default BookHistoryDetailMemoFormContent;
