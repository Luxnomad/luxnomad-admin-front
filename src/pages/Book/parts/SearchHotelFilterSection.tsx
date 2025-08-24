import { TextField } from '@mui/material';
import { format } from 'date-fns';
import dayjs, { isDayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';

import Button from '@@components/Button';
import DatePicker from '@@components/DatePicker';
import Flex from '@@components/Flex';
import Suggestion from '@@components/Suggestion';
import { showErrorToast } from '@@components/Toast';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { searchRoomFailure, searchRoomRequest } from '@@stores/book/reducer';
import { RoomSearchRequest } from '@@stores/book/types';
import { useQueryParams } from '@@utils/request/hooks';
import { searchHotel } from '@@utils/searchRequests';

const initialQuery: Partial<RoomSearchRequest> = {
  childCount: 0,
  adultCount: 1,
};

function SearchHotelFilterSection() {
  const dispatch = useDispatch();

  const { query, updateAllQueries } = useQueryParams(initialQuery, {
    initialSearch: ({ adultCount }) => !adultCount,
  });

  const updateSearchData = (data: Partial<RoomSearchRequest>) => {
    updateAllQueries({ ...query, ...data });
  };

  const handleSubmit = () => {
    if (query.chainCode && query.propertyCode && query.checkIn && query.checkOut) {
      dispatch(searchRoomRequest(query as RoomSearchRequest));
    }
  };

  useActionSubscribe({
    type: searchRoomFailure.type,
    callback: ({ payload }: ReturnType<typeof searchRoomFailure>) => {
      showErrorToast(payload);
    },
  });

  return (
    <Flex.Vertical gap={12}>
      <Row>
        <Col md={4}>
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
        <Col md={4}>
          <DatePicker
            className='tw-w-full'
            label='Chack in Date'
            value={query.checkIn}
            minDate={dayjs()}
            maxDate={query.checkOut ? dayjs(query.checkOut).add(-1, 'day') : undefined}
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
            value={query.checkOut}
            minDate={query.checkIn ? dayjs(query.checkIn).add(1, 'day') : undefined}
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
            value={query.adultCount}
            onChange={(e) => updateSearchData({ adultCount: isNaN(+e.target.value) ? undefined : +e.target.value })}
          />
        </Col>
        <Col md={2}>
          <TextField
            className='tw-w-full'
            label='Child Count'
            type='number'
            value={query.childCount}
            onChange={(e) => updateSearchData({ childCount: isNaN(+e.target.value) ? undefined : +e.target.value })}
          />
        </Col>
      </Row>
      <Flex.Horizontal justifyContent='center'>
        <Button onClick={handleSubmit}>Search</Button>
      </Flex.Horizontal>
    </Flex.Vertical>
  );
}

export default SearchHotelFilterSection;
