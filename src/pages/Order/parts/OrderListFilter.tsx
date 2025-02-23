import { Col, Row } from 'reactstrap';

import DatePicker from '@@components/DatePicker';
import FilterContainer from '@@components/FilterContainer';
import Flex from '@@components/Flex';
import TextField from '@@components/TextField';
import { OrderListQuery } from '@@pages/Order/types';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: OrderListQuery = {
  pageNo: 0,
};

function OrderListFilter() {
  const { query, updateQuery } = useQueryParams(initialQuery, {
    initialSearch: ({ pageNo }) => pageNo === undefined,
  });

  return (
    <FilterContainer>
      <Row className='tw-items-center'>
        <Col md={3}>
          <TextField
            placeholder='주문번호를 입력해주세요.'
            label='주문번호'
            value={query.code ?? ''}
            onChange={(e) => updateQuery('code', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='담당자 코드를 입력해주세요.'
            label='담당자 코드'
            value={query.memberCode ?? ''}
            onChange={(e) => updateQuery('memberCode', e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Flex.Horizontal className='tw-items-center' gap={12}>
            <DatePicker label='주문일자(시작)' value={query.from} onChange={(date) => updateQuery('from', date?.toISOString())} />
            ~
            <DatePicker label='주문일자(종료)' value={query.to} onChange={(date) => updateQuery('to', date?.toISOString())} />
          </Flex.Horizontal>
        </Col>
      </Row>
    </FilterContainer>
  );
}

export default OrderListFilter;
