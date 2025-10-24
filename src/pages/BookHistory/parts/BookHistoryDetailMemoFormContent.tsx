import { Form, useFormikContext } from 'formik';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import TextArea from '@@components/TextArea';
import Title from '@@components/Title';
import Typography from '@@components/Typography';
import { useRequestFlag } from '@@hooks/flag';
import { modifyRetrieveRequest } from '@@stores/retrieve/reducer';

import { BookHistoryMemoForm } from '../types';

function BookHistoryDetailMemoFormContent() {
  const loading = useRequestFlag(modifyRetrieveRequest.type);
  const { getFieldProps, isValid, handleSubmit } = useFormikContext<BookHistoryMemoForm>();

  return (
    <Form onSubmit={handleSubmit}>
      <Flex.Vertical>
        <Title>
          Modify Special Request{' '}
          <Typography.Body3 as='span'>(please contact hotel directly if check-in date is within the next 7 days)</Typography.Body3>
        </Title>
        <Flex.Vertical gap={8}>
          <TextArea {...getFieldProps('commentValue')} placeholder='Please enter your special request details (ENGLISH ONLY).' />
          <Button.Medium disabled={!isValid} type='submit' loading={loading}>
            Modify Special Request
          </Button.Medium>
        </Flex.Vertical>
      </Flex.Vertical>
    </Form>
  );
}

export default BookHistoryDetailMemoFormContent;
