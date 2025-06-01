import { HotelSearchResponse } from '@@stores/book/types';

const HOTEL_LIST: HotelSearchResponse[] = [
  {
    chainCode: 'HH',
    propertyCode: 'A7691',
    name: 'Intercontinental Tangshan',
    country: 'China',
    region: 'Beijing',
  },
  {
    chainCode: 'HH',
    propertyCode: 'A7693',
    name: 'The Shilla Seoul',
    country: 'South Korea',
    region: 'Seoul',
  },
];

export const searchHotel = (keyword: string): Promise<HotelSearchResponse[]> =>
  new Promise((res) => {
    res(HOTEL_LIST.filter(({ name }) => name.includes(keyword)));
  });
