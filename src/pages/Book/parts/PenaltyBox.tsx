import { format } from 'date-fns';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { CancelPenalty } from '@@stores/book/types';

const StyledPenaltyBox = styled(Flex.Vertical)`
  padding: 12px;
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_20};
  &:first-of-type {
    border-top: 1px solid ${COLORS.GRAY_SCALE_20};
  }
`;

function PenaltyBox({ penalty }: { penalty: CancelPenalty }) {
  return (
    <StyledPenaltyBox>
      <Row>
        <Col md={3}>Deadline</Col>
        <Col md={9}>
          {format(penalty.deadline.start, 'yyyy.MM.dd')} ~ {penalty.deadline.end ? format(penalty.deadline.end, 'yyyy.MM.dd') : ''}
        </Col>
      </Row>
      <Row>
        <Col md={3}>Description</Col>
        <Col md={9}>{penalty.description}</Col>
      </Row>
      <Row>
        <Col md={3}>Refundable</Col>
        <Col md={9}>{penalty.refundable ? <span className='tw-text-green-700'>O</span> : <span className='tw-text-red-700'>X</span>}</Col>
      </Row>
      <Row>
        <Col md={3}>Hotel Penalty</Col>
        <Col md={9}>
          {penalty.hotelPenalty.percent} {penalty.hotelPenalty.appliesTo}
        </Col>
      </Row>
    </StyledPenaltyBox>
  );
}

export default PenaltyBox;
