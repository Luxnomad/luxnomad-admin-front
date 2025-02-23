import { Col, Row } from 'reactstrap';

import FilterContainer from '@@components/FilterContainer';
import RadioGroup from '@@components/RadioGroup';
import TextField from '@@components/TextField';
import { PopupListQuery } from '@@pages/PopupManagement/types';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: PopupListQuery = {
  pageNo: 1,
};

function PopupListFilter() {
  const { query, updateQuery } = useQueryParams(initialQuery, { initialSearch: (query) => !query.pageNo });

  return (
    <FilterContainer>
      <Row className='tw-items-center'>
        <Col md={3}>
          <TextField
            placeholder='팝업 ID를 입력해주세요.'
            label='팝업 ID'
            value={query.popupId ?? ''}
            onChange={(e) => updateQuery('popupId', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='제목을 입력해주세요.'
            label='제목'
            value={query.popupName ?? ''}
            onChange={(e) => updateQuery('popupName', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <RadioGroup
            label='사용여부'
            options={[
              { value: 'all', label: '전체' },
              { value: 'use', label: '사용중' },
              { value: 'unused', label: '미사용' },
            ]}
            value={query.status ?? 'all'}
            onChange={(e) => updateQuery('status', e.target.value)}
          />
        </Col>
      </Row>
    </FilterContainer>
  );
}

export default PopupListFilter;
