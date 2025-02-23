import { Col, Row } from 'reactstrap';

import Dropdown from '@@components/Dropdown';
import FilterContainer from '@@components/FilterContainer';
import TextField from '@@components/TextField';
import { AdminListQuery } from '@@pages/Admin/types';
import { ADMIN_MEMBER_TYPE_OPTIONS } from '@@stores/auth/constants';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: AdminListQuery = {
  pageNo: 1,
};

function AdminListFilter() {
  const { query, updateQuery } = useQueryParams(initialQuery, {
    initialSearch: ({ pageNo }) => !pageNo,
  });

  return (
    <FilterContainer>
      <Row>
        <Col md={3}>
          <TextField placeholder='ID를 입력해주세요.' label='ID' value={query.id ?? ''} onChange={(e) => updateQuery('id', e.target.value)} />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='이메일 입력해주세요.'
            label='이메일'
            value={query.email ?? ''}
            onChange={(e) => updateQuery('email', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField placeholder='이름을 입력해주세요.' label='이름' value={query.name ?? ''} onChange={(e) => updateQuery('name', e.target.value)} />
        </Col>
        <Col md={3}>
          <Dropdown
            label='멤버 타입'
            placeholder='타입을 선택해주세요.'
            value={query.type || ''}
            options={[
              {
                value: '',
                label: 'All',
              },
            ].concat(ADMIN_MEMBER_TYPE_OPTIONS)}
            displayEmpty
            onChange={(e) => updateQuery('type', e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <TextField
            placeholder='플랫폼 ID를 입력해주세요'
            label='플랫폼 ID'
            value={query.platformId}
            onChange={(e) => updateQuery('platformId', e.target.value)}
          />
        </Col>
      </Row>
    </FilterContainer>
  );
}

export default AdminListFilter;
