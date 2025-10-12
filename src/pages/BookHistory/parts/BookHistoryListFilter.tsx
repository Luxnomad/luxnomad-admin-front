import { useState } from 'react';

import { format } from 'date-fns';
import { isDayjs } from 'dayjs';
import { Col, Row } from 'reactstrap';

import Button from '@@components/Button';
import DatePicker from '@@components/DatePicker';
import Dropdown from '@@components/Dropdown';
import Flex from '@@components/Flex';
import { BookListRequest } from '@@stores/retrieve/types';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: BookListRequest = {
  page: 0,
};

function BookHistoryListFilter() {
  const { query, updateAllQueries } = useQueryParams(initialQuery, {
    initialSearch: ({ page }) => page === undefined,
  });

  const [searchData, setSearchData] = useState<BookListRequest>(query);

  const updateSearchData = (data: Partial<BookListRequest>) => {
    setSearchData((prev) => ({ ...prev, ...data }));
  };

  const handleClickSearch = () => {
    updateAllQueries(searchData);
  };

  return (
    <Flex.Vertical gap={12}>
      <Row>
        <Col md={4}>
          <Dropdown
            label='Status'
            value={searchData.status ?? ''}
            options={[
              {
                label: 'Booked',
                value: 'BOOKED',
              },
              {
                label: 'Staying',
                value: 'STAYING',
              },
              {
                label: 'Cancelled',
                value: 'CANCELLED',
              },
            ]}
            onChange={(e) => updateSearchData({ status: e.target.value })}
          />
        </Col>
        <Col md={4}>
          <DatePicker
            className='tw-w-full'
            label='Chackin Date'
            value={searchData.checkInDate}
            onChange={(date) => {
              if (isDayjs(date)) {
                updateSearchData({ checkInDate: date.format('YYYY-MM-DD') });
              } else {
                updateSearchData({ checkInDate: date ? format(date, 'yyyy-MM-dd') : undefined });
              }
            }}
          />
        </Col>
        <Col md={4}>
          <DatePicker
            className='tw-w-full'
            label='Chackout Date'
            value={searchData.checkoutDate}
            onChange={(date) => {
              if (isDayjs(date)) {
                updateSearchData({ checkoutDate: date.format('YYYY-MM-DD') });
              } else {
                updateSearchData({ checkoutDate: date ? format(date, 'yyyy-MM-dd') : undefined });
              }
            }}
          />
        </Col>
      </Row>
      <Button.Medium className='tw-self-center' onClick={handleClickSearch}>
        Search
      </Button.Medium>
    </Flex.Vertical>
  );
}

export default BookHistoryListFilter;
