import { useState } from 'react';

import { TextField } from '@mui/material';
import { isDayjs } from 'dayjs';
import { Col, Row } from 'reactstrap';

import Button from '@@components/Button';
import DatePicker from '@@components/DatePicker';
import Flex from '@@components/Flex';
import Suggestion from '@@components/Suggestion';
import { RoomSearchRequest } from '@@stores/book/types';
import { useQueryParams } from '@@utils/request/hooks';
import { searchHotel } from '@@utils/searchRequests';

const initialQuery: Partial<RoomSearchRequest> = {};

function SearchHotelFilterSection() {
  const { query, updateAllQueries } = useQueryParams(initialQuery);

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
        <Col md={3}>
          <Suggestion
            fullWidth
            fetcher={searchHotel}
            onChange={(value) => updateSearchData({ propertyCode: value.propertyCode, chainCode: value.chainCode })}
            getOptionLabel={({ name, region, country }) => `${region} ${country} - ${name}`}
            textFieldProps={{
              placeholder: 'Search By Hotel Name',
            }}
          />
        </Col>
        <Col md={3}>
          <DatePicker
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
        <Col md={3}>
          <DatePicker
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
        <Col md={3}>
          <TextField
            label='Number of guests'
            type='number'
            value={searchData.numberOfGuest}
            onChange={(e) => updateSearchData({ numberOfGuest: isNaN(+e.target.value) ? undefined : +e.target.value })}
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
