import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import Typography from '@@components/Typography';
import { HotelRulesResponse, Room } from '@@stores/book/types';

const StyledReservationFormContent = styled(PageTemplate)``;

const Section = styled(Flex.Vertical)`
  gap: 12px;
  .title {
    font-size: 28px;
    font-weight: bold;
  }
`;

function ReservationFormContent({ room, rules }: { room: Room; rules: HotelRulesResponse }) {
  return (
    <StyledReservationFormContent headerContent={`[${rules.bookingCode}] ${rules.hotelName} - ${room.roomType}`}>
      <Section>
        <h2 className='title'>Basic Info</h2>
        <Row>
          <Col md={3}>
            <Typography.Body2>Schedules</Typography.Body2>
          </Col>
          <Col md={9}>
            <Typography.Body2>
              {rules.checkInDate} {rules.checkInTime} ~ {rules.checkOutDate} {rules.checkOutTime}
            </Typography.Body2>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Typography.Body2>Price</Typography.Body2>
          </Col>
          <Col md={9}>
            <Typography.Body2>
              {rules.price.toLocaleString()} {rules.currency}
            </Typography.Body2>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Typography.Body2>Breakfast included</Typography.Body2>
          </Col>
          <Col md={9}>
            <Typography.Body2 color={rules.mealsIncluded ? 'green' : 'red'}>{rules.mealsIncluded ? 'O' : 'X'}</Typography.Body2>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Typography.Body2>Benefits</Typography.Body2>
          </Col>
          <Col md={9}>
            <Typography.Body2>{rules.benefit}</Typography.Body2>
          </Col>
        </Row>
      </Section>
      <Section>
        <h1 className='title'>Penalties</h1>
      </Section>
    </StyledReservationFormContent>
  );
}

export default ReservationFormContent;
