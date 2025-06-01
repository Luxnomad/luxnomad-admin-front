import { HotelSearchResponse } from '@@stores/book/types';

export interface BookForm {
  hotel?: HotelSearchResponse;
  checkIn?: Date;
  checkOut?: Date;
}
