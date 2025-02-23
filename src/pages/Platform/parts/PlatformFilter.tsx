import { Col, Row } from 'reactstrap';

import FilterContainer from '@@components/FilterContainer';
import TextField from '@@components/TextField';
import { PlatformListQuery } from '@@pages/Platform/types';
import { useIsSystemAdmin } from '@@stores/auth/selector';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: PlatformListQuery = {
  pageNo: 0,
};

function PlatformFilter() {
  const isAdmin = useIsSystemAdmin();

  const { query, updateQuery } = useQueryParams(initialQuery, { initialSearch: (query) => !query.pageNo });

  if (!isAdmin) {
    return null;
  }

  return (
    <FilterContainer>
      <Row>
        <Col md={3}>
          <TextField
            placeholder='플랫폼 ID를 입력해주세요.'
            label='플랫폼 ID'
            value={query.id ?? ''}
            onChange={(e) => updateQuery('id', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='플랫폼명을 입력해주세요.'
            label='플랫폼명'
            value={query.name ?? ''}
            onChange={(e) => updateQuery('name', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='대표자명을 입력해주세요.'
            label='대표자명'
            value={query.ownerName ?? ''}
            onChange={(e) => updateQuery('ownerName', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='사업자 등록번호를 입력해주세요.'
            label='사업자 등록번호'
            value={query.regNumber ?? ''}
            onChange={(e) => updateQuery('regNumber', e.target.value)}
          />
        </Col>
      </Row>
    </FilterContainer>
  );
}

export default PlatformFilter;
