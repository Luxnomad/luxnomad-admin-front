import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { PATH } from '@@constants/path';
import useSearch from '@@hooks/useSearch';
import { RateInfo, Room, RoomSearchRequest } from '@@stores/book/types';

import HotelImageSlider from './HotelImageSlider';

const StyledRoomInfoItem = styled(Flex.Vertical)`
  gap: 12px;
  padding: 24px 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid #b8b8b8;
  }

  .room__image {
    flex: 0 0 auto;
    width: 250px;
    border-radius: 12px;
  }

  .room__info {
    flex: 1;
  }

  .rate__info {
    padding: 12px 16px;

    &:not(:last-of-type) {
      border-bottom: 1px solid #dcdcdc;
    }
  }
`;

function RoomInfoItem({ room }: { room: Room }) {
  const query = useSearch<RoomSearchRequest>();
  const navigate = useNavigate();

  const handleClickBook = (rate: RateInfo) => {
    navigate(`${PATH.BOOK}/reservation`, {
      state: { room, rate, searchInfo: query },
    });
  };

  return (
    <StyledRoomInfoItem>
      <Flex.Horizontal gap={12}>
        <div className='room__image'>
          <HotelImageSlider images={room.roomImages} />
        </div>
        <Flex.Vertical className='room__info'>
          <Typography.Subtitle1>{room.roomType}</Typography.Subtitle1>
          {room.maxOccupancy && <Typography.Body2>Max Occupancy: {room.maxOccupancy}</Typography.Body2>}
          <Flex.Vertical className='tw-mt-[12px]' gap={4}>
            {room.bedTypes.map((type) => (
              <Typography.Body2>
                - {type.bedType}
                <span className='tw-text-[14px]'> [{type.size}]</span> X {type.quantity}
              </Typography.Body2>
            ))}
          </Flex.Vertical>
        </Flex.Vertical>
      </Flex.Horizontal>
      <Flex.Vertical className='tw-flex-shrink-0'>
        <Flex.Vertical>
          {room.rates.map((rate) => (
            <Flex.Horizontal className='rate__info' gap={2} key={rate.rateKey} alignItems='flex-start' justifyContent='space-between'>
              <Flex.Vertical>
                <Typography.Subtitle2>[{rate.rateDescription}]</Typography.Subtitle2>
                <Typography.Body3>
                  Price: {rate.price.toLocaleString()} {rate.currency}
                </Typography.Body3>
                <Typography.Body3>RAC: {rate.rateCode}</Typography.Body3>
                <Typography.Body3>Partnership: {rate.partnershipName}</Typography.Body3>
              </Flex.Vertical>
              <Button.Medium onClick={() => handleClickBook(rate)}>Choose this rate</Button.Medium>
            </Flex.Horizontal>
          ))}
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledRoomInfoItem>
  );
}

export default RoomInfoItem;
