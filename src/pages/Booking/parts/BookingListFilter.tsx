import { Col, Row } from 'reactstrap';

import FilterContainer from '@@components/FilterContainer';
import TextFieldFilterGroup from '@@components/TextFieldFilterGroup';

function BookingListFilter() {
  return (
    <FilterContainer>
      <Row>
        <Col md={3}>
          <TextFieldFilterGroup label='Region' />
        </Col>
        <Col md={3}>
          <TextFieldFilterGroup label='Booking Code' />
        </Col>
        <Col md={3}>
          <TextFieldFilterGroup label='Booking Status' />
        </Col>
        <Col md={3}>
          <TextFieldFilterGroup label='Hotel Name' />
        </Col>
      </Row>
    </FilterContainer>
  );
}

export default BookingListFilter;
