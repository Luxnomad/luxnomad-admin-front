import { Col, Row } from 'reactstrap';

import FilterContainer from '@@components/FilterContainer';
import TextField from '@@components/TextField';
import { MemberListQuery } from '@@pages/Member/types';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: MemberListQuery = {
  pageNo: 0,
};

function MemberFilter() {
  const { query, updateQuery } = useQueryParams(initialQuery, { initialSearch: (query) => query.pageNo == undefined });

  return (
    <FilterContainer>
      <Row>
        <Col md={3}>
          <TextField
            placeholder='유저 ID를 입력해주세요.'
            label='유저 ID'
            value={query.id ?? ''}
            onChange={(e) => updateQuery('id', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='유저명을 입력해주세요.'
            label='유저명'
            value={query.name ?? ''}
            onChange={(e) => updateQuery('name', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='플랫폼 ID를 입력해주세요.'
            label='플랫폼 ID'
            value={query.platformId ?? ''}
            onChange={(e) => updateQuery('platformId', e.target.value)}
          />
        </Col>
      </Row>
    </FilterContainer>
  );
}

export default MemberFilter;
