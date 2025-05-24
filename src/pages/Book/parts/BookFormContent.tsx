import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import styled from 'styled-components';

import DatePicker from '@@components/DatePicker';
import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';

import { BookForm } from '../types';

const StyledBookFormContent = styled(PageTemplate)``;

function BookFormContent() {
  const { values, setFieldValue } = useFormikContext<BookForm>();

  return (
    <StyledBookFormContent>
      <Flex.Horizontal gap={12}>
        <TextField label='Hotel Name' />
        <DatePicker
          label='Chack in Date'
          value={values.checkIn}
          onChange={(date) => {
            setFieldValue('checkIn', date);
          }}
        />
        <DatePicker
          label='Chack out Date'
          value={values.checkOut}
          onChange={(date) => {
            setFieldValue('checkOut', date);
          }}
        />
        <TextField label='Number of guests' type='number' />
      </Flex.Horizontal>
    </StyledBookFormContent>
  );
}

export default BookFormContent;
