import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { useAppState } from '@@store/hooks';

import HotelImageSlider from './HotelImageSlider';
import RoomInfoItem from './RoomInfoItem';

function SearchedHotelInfoSection() {
  const data = useAppState((state) => state.book.roomResponse);

  if (!data) {
    return null;
  }

  const rooms = [...data.rooms];

  const sortedRooms = rooms
    .map((room) => {
      const rates = [...room.rates];
      return {
        ...room,
        rates: rates.sort((a, b) => a.price - b.price),
      };
    })
    .sort((a, b) => a.rates[0].price - b.rates[0].price);

  return (
    <Flex.Vertical className='tw-mt-[30px]'>
      <Flex.Horizontal gap={12}>
        <Flex.Vertical className='tw-flex-1' gap={8}>
          <Typography.Headline2>{data.hotelName}</Typography.Headline2>
          <Typography.Body3 color='#353535'>Address - {data.address}</Typography.Body3>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2-content' id='panel2-header'>
              <Typography.Headline2>Hotel Description</Typography.Headline2>
            </AccordionSummary>
            <AccordionDetails>
              <Typography.Body2>{data.description}</Typography.Body2>
            </AccordionDetails>
          </Accordion>
        </Flex.Vertical>
        <div className='tw-w-[250px] tw-flex-shrink-0'>
          <HotelImageSlider images={data.hotelImages} />
        </div>
      </Flex.Horizontal>
      <Flex.Vertical className='tw-mt-[24px]'>
        {sortedRooms.map((room, index) => (
          <RoomInfoItem room={room} key={index} />
        ))}
      </Flex.Vertical>
    </Flex.Vertical>
  );
}

export default SearchedHotelInfoSection;
