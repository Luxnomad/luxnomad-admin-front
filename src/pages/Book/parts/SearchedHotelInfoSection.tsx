import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

import { useRoomSearch } from '../hooks';
import HotelImageSlider from './HotelImageSlider';
import RoomInfoItem from './RoomInfoItem';

function SearchedHotelInfoSection() {
  const { data } = useRoomSearch();

  if (!data) {
    return null;
  }

  return (
    <Flex.Vertical className='tw-mt-[30px]'>
      <Flex.Horizontal gap={12}>
        <Flex.Vertical className='tw-flex-1' gap={8}>
          <Typography.Headline2>{data.hotelName}</Typography.Headline2>
          <Typography.Body3 color='#353535'>Address - {data.address}</Typography.Body3>
          <Typography.Body2>{data.description}</Typography.Body2>
        </Flex.Vertical>
        <div className='tw-w-[250px] tw-flex-shrink-0'>
          <HotelImageSlider images={data.hotelImages} />
        </div>
      </Flex.Horizontal>
      <Flex.Vertical className='tw-mt-[12px]' gap={8}>
        {data.rooms.map((room, index) => (
          <RoomInfoItem room={room} key={index} />
        ))}
      </Flex.Vertical>
    </Flex.Vertical>
  );
}

export default SearchedHotelInfoSection;
