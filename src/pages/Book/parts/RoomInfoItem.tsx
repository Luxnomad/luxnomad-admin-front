import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { PATH } from '@@constants/path';
import useSearch from '@@hooks/useSearch';
import { RateInfo, Room, RoomSearchRequest } from '@@stores/book/types';

import HotelImageSlider from './HotelImageSlider';

const StyledRoomInfoItem = styled(Flex.Horizontal)`
  gap: 12px;

  .room__image {
    flex: 0 0 auto;
    width: 250px;
    border-radius: 12px;
  }

  .room__info {
    flex: 1;
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
      <div className='room__image'>
        <HotelImageSlider images={room.roomImages} />
      </div>
      <Flex.Vertical className='tw-flex-shrink-0'>
        <Flex.Vertical className='room__info'>
          <Typography.Subtitle1>{room.roomType}</Typography.Subtitle1>
          <Typography.Body3>
            <span>Bed Type: {room.bedType}</span>
            <span className='tw-ml-[8px]'>Bed Count: {room.bedQuantity}</span>
          </Typography.Body3>
          <Flex.Vertical className='tw-mt-[12px]' gap={24}>
            {room.rates.map((rate, index) => (
              <Flex.Vertical gap={2} key={rate.rateKey} alignItems='flex-start'>
                <Typography.Body3>
                  [Rate {index + 1}]: {rate.price.toLocaleString()} {rate.currency}
                </Typography.Body3>
                <Typography.Caption1>RAC: {rate.rateCode}</Typography.Caption1>
                <Typography.Caption1>Partnership: {rate.partnershipName}</Typography.Caption1>
                <Button size='small' onClick={() => handleClickBook(rate)}>
                  Choose this rate
                </Button>
              </Flex.Vertical>
            ))}
          </Flex.Vertical>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledRoomInfoItem>
  );
}

export default RoomInfoItem;
