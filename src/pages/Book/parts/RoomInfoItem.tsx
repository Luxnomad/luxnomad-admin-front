import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { Room } from '@@stores/book/types';

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
  return (
    <StyledRoomInfoItem>
      <img className='room__image' src={room.roomImage} />
      <Flex.Vertical className='room__info'>
        <Typography.Subtitle1>{room.roomType}</Typography.Subtitle1>
        <Typography.Body3>
          <span>Bed Type: {room.bedType}</span>
          <span className='tw-ml-[8px]'>Bed Count: {room.bedQuantity}</span>
        </Typography.Body3>
        <Typography.Body3>
          {room.price.toLocaleString()} {room.currency}
        </Typography.Body3>
      </Flex.Vertical>
    </StyledRoomInfoItem>
  );
}

export default RoomInfoItem;
