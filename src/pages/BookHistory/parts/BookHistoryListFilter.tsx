import { Col, Row } from 'reactstrap';

import DatePicker from '@@components/DatePicker';
import Dropdown from '@@components/Dropdown';
import Flex from '@@components/Flex';

function BookHistoryListFilter() {
  return (
    <Flex.Vertical gap={12}>
      <Row>
        <Col md={4}>
          <Dropdown
            label='Status'
            options={[
              {
                label: 'Booked',
                value: 'booked',
              },
              {
                label: 'Staying',
                value: 'staying',
              },
              {
                label: 'Cancelled',
                value: 'cancelled',
              },
            ]}
          />
        </Col>
        <Col md={4}>
          <DatePicker className='tw-w-full' label='Chackin Date' value={new Date()} onChange={() => {}} />
        </Col>
        <Col md={4}>
          <DatePicker className='tw-w-full' label='Chackout Date' value={new Date()} onChange={() => {}} />
        </Col>
      </Row>
    </Flex.Vertical>
  );
}

export default BookHistoryListFilter;
