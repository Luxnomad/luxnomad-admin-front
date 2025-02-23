import { Col, Row } from 'reactstrap';

import FilterContainer from '@@components/FilterContainer';
import RadioGroup from '@@components/RadioGroup';
import TextField from '@@components/TextField';
import { PostListQuery } from '@@pages/PostManagement/types';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: PostListQuery = {
  pageNo: 0,
};

function PostListFilter() {
  const { query, updateQuery } = useQueryParams(initialQuery, { initialSearch: (query) => query.pageNo === undefined });

  return (
    <FilterContainer>
      <Row className='tw-items-center'>
        <Col md={3}>
          <TextField
            placeholder='공시사항 ID를 입력해주세요.'
            label='공시사항 ID'
            value={query.postId ?? ''}
            onChange={(e) => updateQuery('postId', e.target.value)}
          />
        </Col>
        <Col md={3}>
          <TextField
            placeholder='제목을 입력해주세요.'
            label='제목'
            value={query.postName ?? ''}
            onChange={(e) => updateQuery('postName', e.target.value)}
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

export default PostListFilter;
