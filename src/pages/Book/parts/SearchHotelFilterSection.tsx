import { useEffect, useState } from 'react';

import { TextField } from '@mui/material';
import { format } from 'date-fns';
import { isDayjs } from 'dayjs';
import { Col, Row } from 'reactstrap';

import Button from '@@components/Button';
import DatePicker from '@@components/DatePicker';
import Flex from '@@components/Flex';
// import Suggestion from '@@components/Suggestion';
import { RoomSearchRequest } from '@@stores/book/types';
import { useQueryParams } from '@@utils/request/hooks';
// import { searchHotel } from '@@utils/searchRequests';

const initialQuery: Partial<RoomSearchRequest> = {
  childCount: 0,
  adultCount: 1,
  chainCode: 'MC',
  propertyCode: '34266',
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

  useEffect(() => {
    updateSearchData(query);
  }, [query]);

  return (
    <Flex.Vertical gap={12}>
      <Row>
        <Col md={4}>
          {/* <Suggestion
            fullWidth
            fetcher={searchHotel}
            // onChange={(value) => updateSearchData({ propertyCode: value.propertyCode, chainCode: value.chainCode })}
            getOptionLabel={({ name, region, country }) => `${region} ${country} - ${name}`}
            textFieldProps={{
              placeholder: 'Search By Hotel Name',
            }}
          /> */}
        </Col>
        <Col md={4}>
          <DatePicker
            className='tw-w-full'
            label='Chack in Date'
            value={searchData.checkIn}
            onChange={(date) => {
              if (isDayjs(date)) {
                updateSearchData({ checkIn: date.format('YYYY-MM-DD') });
              } else {
                updateSearchData({ checkIn: date ? format(date, 'yyyy-MM-dd') : undefined });
              }
            }}
          />
        </Col>
        <Col md={4}>
          <DatePicker
            className='tw-w-full'
            label='Chack out Date'
            value={searchData.checkOut}
            onChange={(date) => {
              if (isDayjs(date)) {
                updateSearchData({ checkOut: date.format('YYYY-MM-DD') });
              } else {
                updateSearchData({ checkOut: date ? format(date, 'yyyy-MM-dd') : undefined });
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
