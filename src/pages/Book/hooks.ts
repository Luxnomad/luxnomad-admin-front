import useSearch from '@@hooks/useSearch';
import { RoomSearchRequest, RoomSearchResponse } from '@@stores/book/types';

export const useRoomSearch = () => {
  const query = useSearch<RoomSearchRequest>();

  const skip = !query.chainCode || !query.propertyCode || !query.checkInDate || !query.checkOutDate || !query.numberOfGuest;

  // const { data } = useSWRDetail<RoomSearchResponse[]>();
  const data: RoomSearchResponse | undefined = skip
    ? undefined
    : {
        hotelName: 'Intercontinental Tangshan',
        address: '',
        rooms: [
          {
            roomType: '2 Double Bed(s) Room With City Views',
            price: 200000,
            description: ['Stay For Breakfast Rate, Includes Breakfast ', 'Daily, Wonderful Room, Guest Room, 2 Double,', 'City View'],
            bookingCode: 'K00BFKK',
            rateKey: 'bbd99f462dc26dbf1f4efb09292740ac131a10fe9c60a9e3638112293bbba085:397cc02c7265074409ed978ced4c129c',
            available: true,
          },
        ],
      };

  return { data };
};
