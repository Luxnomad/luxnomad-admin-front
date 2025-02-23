import { Col, Row } from 'reactstrap';

import FilterContainer from '@@components/FilterContainer';
import TextField from '@@components/TextField';
import { ProductListQuery } from '@@pages/Product/types';
import { useIsSystemAdmin } from '@@stores/auth/selector';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: ProductListQuery = {
  pageNo: 0,
};

function ProductListFilter() {
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
            placeholder='상품 ID를 입력해주세요.'
            label='상품 ID'
            value={query.id ?? ''}
            onChange={(e) => updateQuery('id', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='상품명을 입력해주세요.'
            label='상품명'
            value={query.name ?? ''}
            onChange={(e) => updateQuery('name', e.target.value)}
          />
        </Col>
      </Row>
    </FilterContainer>
  );
}

export default ProductListFilter;
