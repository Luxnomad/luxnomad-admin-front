import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import DatePicker from '@@components/DatePicker';
import PageTemplate from '@@components/PageTemplate';
import Suggestion from '@@components/Suggestion';
import { searchHotel } from '@@utils/searchRequests';

import { BookForm } from '../types';

const StyledBookFormContent = styled(PageTemplate)``;

function BookFormContent() {
  const { values, setFieldValue } = useFormikContext<BookForm>();

  return (
    <StyledBookFormContent>
      <Row>
        <Col md={3}>
          <Suggestion
            fullWidth
            fetcher={searchHotel}
            onChange={(value) => setFieldValue('hotel', value)}
            getOptionLabel={({ name, region, country }) => `${region} ${country} - ${name}`}
            textFieldProps={{
              placeholder: 'Search By Hotel Name',
            }}
          />
        </Col>
        <Col md={3}>
          <DatePicker
            label='Chack in Date'
            value={values.checkIn}
            onChange={(date) => {
              setFieldValue('checkIn', date);
            }}
          />
        </Col>
        <Col md={3}>
          <DatePicker
            label='Chack out Date'
            value={values.checkOut}
            onChange={(date) => {
              setFieldValue('checkOut', date);
            }}
          />
        </Col>
        <Col md={3}>
          <TextField label='Number of guests' type='number' />
        </Col>
      </Row>
    </StyledBookFormContent>
  );
}

export default BookFormContent;
