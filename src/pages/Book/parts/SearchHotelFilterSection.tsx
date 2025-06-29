import { useState } from 'react';

import { TextField } from '@mui/material';
import { isDayjs } from 'dayjs';
import { Col, Row } from 'reactstrap';

import Button from '@@components/Button';
import DatePicker from '@@components/DatePicker';
import Flex from '@@components/Flex';
import { RoomSearchRequest } from '@@stores/book/types';
import { useQueryParams } from '@@utils/request/hooks';

const initialQuery: Partial<RoomSearchRequest> = {
  childCount: 0,
  adultCount: 1,
};

function SearchHotelFilterSection() {
  const { query, updateAllQueries } = useQueryParams(initialQuery, {
    initialSearch: ({ adultCount }) => !adultCount,
  });

  const [searchData, setSearchData] = useState<Partial<RoomSearchRequest>>(query);

  const updateSearchData = (data: Partial<RoomSearchRequest>) => {
    setSearchData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = () => {
    updateAllQueries(searchData);
  };

  return (
    <Flex.Vertical gap={12}>
      <Row>
        <Col md={4}>
          <TextField
            className='tw-w-full'
            label='Keyword'
            value={searchData.keyword}
            onChange={(e) => updateSearchData({ keyword: e.target.value })}
          />
        </Col>
        <Col md={4}>
          <DatePicker
            className='tw-w-full'
            label='Chack in Date'
            value={searchData.checkInDate}
            onChange={(date) => {
              if (isDayjs(date)) {
                updateSearchData({ checkInDate: date.toDate() });
              } else {
                updateSearchData({ checkInDate: date ?? undefined });
              }
            }}
          />
        </Col>
        <Col md={4}>
          <DatePicker
            className='tw-w-full'
            label='Chack out Date'
            value={searchData.checkOutDate}
            onChange={(date) => {
              if (isDayjs(date)) {
                updateSearchData({ checkOutDate: date.toDate() });
              } else {
                updateSearchData({ checkOutDate: date ?? undefined });
              }
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <TextField
            className='tw-w-full'
            label='Adult count'
            type='number'
            value={searchData.adultCount}
            onChange={(e) => updateSearchData({ adultCount: isNaN(+e.target.value) ? undefined : +e.target.value })}
          />
        </Col>
        <Col md={2}>
          <TextField
            className='tw-w-full'
            label='Child Count'
            type='number'
            value={searchData.childCount}
            onChange={(e) => updateSearchData({ childCount: isNaN(+e.target.value) ? undefined : +e.target.value })}
          />
        </Col>
      </Row>
      <Flex.Horizontal justifyContent='center'>
        <Button onClick={handleSubmit}>검색</Button>
      </Flex.Horizontal>
    </Flex.Vertical>
  );
}

export default SearchHotelFilterSection;
