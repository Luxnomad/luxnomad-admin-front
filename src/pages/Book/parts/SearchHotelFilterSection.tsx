import { useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { format } from 'date-fns';
import dayjs, { isDayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import Button from '@@components/Button';
import DatePicker from '@@components/DatePicker';
import Flex from '@@components/Flex';
import Suggestion from '@@components/Suggestion';
import { showErrorToast } from '@@components/Toast';
import { COLORS } from '@@constants/colors';
import { useRequestFlag } from '@@hooks/flag';
import { useAppState } from '@@store/hooks';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { checkInitialSearch, resetRoomData, searchRoomFailure, searchRoomRequest } from '@@stores/book/reducer';
import { RoomSearchRequest } from '@@stores/book/types';
import { clearHotelSearchInfo, getHotelSearchInfo, saveHotelSearchInfo } from '@@utils/localStorage';
import { useQueryParams } from '@@utils/request/hooks';
import { searchHotel } from '@@utils/searchRequests';

const StyledAgeContainer = styled(Col)`
  position: relative;

  .close {
    position: absolute;
    width: 14px;
    height: 14px;
    right: 4px;
    top: -7px;
    border-radius: 50%;
    background: ${COLORS.GRAY_SCALE_30};
    z-index: 10;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const initialQuery: Partial<RoomSearchRequest> = {
  adultCount: 2,
};

const hotelSearchInfo = getHotelSearchInfo();

function SearchHotelFilterSection() {
  const dispatch = useDispatch();
  const { initialSearch } = useAppState((state) => state.book);

  const { query, updateAllQueries, updateQuery } = useQueryParams(initialQuery, {
    initialSearch: ({ adultCount }) => !adultCount,
  });

  const loading = useRequestFlag(searchRoomRequest.type);
  const availableSearch = query.chainCode && query.propertyCode && query.checkIn && query.checkOut;

  const defaultHotelInfo =
    hotelSearchInfo && hotelSearchInfo.chain_code === query.chainCode && hotelSearchInfo.property_code === query.propertyCode
      ? hotelSearchInfo
      : undefined;

  const childrenAges = Array.isArray(query.childrenAges) ? query.childrenAges : query.childrenAges ? [query.childrenAges] : [];

  const updateSearchData = (data: Partial<RoomSearchRequest>) => {
    updateAllQueries({ ...query, ...data });
  };

  const handleSubmit = () => {
    if (query.checkIn && query.checkOut && !dayjs(query.checkIn).isBefore(query.checkOut)) {
      return alert('Invalid Date Range: Your checkout date must be after your check-in date to search for availability.');
    }

    if (availableSearch) {
      dispatch(searchRoomRequest(query as RoomSearchRequest));
    }
  };

  const handleClickReset = () => {
    updateAllQueries(initialQuery);
    dispatch(resetRoomData());
  };

  // const handleClickAddChild = () => {
  //   const newChildren = [...childrenAges];
  //   newChildren.push(0);
  //   updateQuery('childrenAges', newChildren);
  // };

  const handleClickRemoveChild = (index: number) => {
    const newChildren = [...childrenAges];
    newChildren.splice(index, 1);
    updateQuery('childrenAges', newChildren);
  };

  const handleClickChangeChild = (index: number, count: number) => {
    const newChildren = [...childrenAges];
    newChildren[index] = count;
    updateQuery('childrenAges', newChildren);
  };

  useActionSubscribe({
    type: searchRoomFailure.type,
    callback: ({ payload }: ReturnType<typeof searchRoomFailure>) => {
      showErrorToast(payload);
    },
  });

  useEffect(() => {
    if (!initialSearch && query.chainCode && query.propertyCode && query.checkIn && query.checkOut) {
      dispatch(searchRoomRequest(query as RoomSearchRequest));
    } else if (!initialSearch) {
      dispatch(checkInitialSearch());
    }
  }, [initialSearch, query, dispatch]);

  return (
    <Flex.Vertical gap={12}>
      <Row>
        <Col md={4}>
          <Suggestion
            fullWidth
            fetcher={searchHotel}
            defaultValue={defaultHotelInfo}
            onChange={(value) => {
              if (value) {
                saveHotelSearchInfo(value);
                updateSearchData({ propertyCode: value.property_code, chainCode: value.chain_code });
              } else {
                clearHotelSearchInfo();
                updateSearchData({ propertyCode: undefined, chainCode: undefined });
              }
            }}
            getOptionLabel={({ hotel_name, region, country }) => `${region} ${country} - ${hotel_name}`}
            textFieldProps={{
              placeholder: 'Search By Hotel Name',
            }}
          />
        </Col>
        <Col md={4}>
          <DatePicker
            className='tw-w-full'
            label='Check in Date'
            value={query.checkIn}
            minDate={dayjs()}
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
            label='Check out Date'
            value={query.checkOut}
            minDate={dayjs()}
            onChange={(date) => {
              if (isDayjs(date)) {
                updateSearchData({ checkOut: date.format('YYYY-MM-DD') });
              } else {
                updateSearchData({ checkOut: date ? format(date, 'yyyy-MM-dd') : undefined });
              }
            }}
          />
        </Col>
        {/* <Col md={3}>
          <TextField
            className='tw-w-full'
            label='Adult count'
            type='number'
            value={query.adultCount}
            onChange={(e) => updateSearchData({ adultCount: isNaN(+e.target.value) ? undefined : +e.target.value })}
          />
        </Col> */}
      </Row>
      <Row>
        {childrenAges.map((child, index) => (
          <StyledAgeContainer md={3} key={index}>
            <div className='close' onClick={() => handleClickRemoveChild(index)}>
              <CloseIcon style={{ fontSize: 12 }} />
            </div>
            <TextField
              className='tw-w-full'
              label={`Child ${index + 1} Age`}
              type='number'
              value={child}
              onChange={(e) => {
                handleClickChangeChild(index, +(e.target.value || 0));
              }}
            />
          </StyledAgeContainer>
        ))}
      </Row>
      <Flex.Horizontal justifyContent='center'>
        <Flex.Horizontal gap={8}>
          {/* <Button.Medium theme='outline' onClick={handleClickAddChild}>
            Add Child
          </Button.Medium> */}
          <Button.Medium theme='outline' onClick={handleClickReset}>
            Reset
          </Button.Medium>
          <Button.Medium onClick={handleSubmit} loading={loading} disabled={!availableSearch}>
            Search
          </Button.Medium>
        </Flex.Horizontal>
      </Flex.Horizontal>
    </Flex.Vertical>
  );
}

export default SearchHotelFilterSection;
