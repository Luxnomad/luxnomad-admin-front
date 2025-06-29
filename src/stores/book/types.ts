export interface HotelSearchResponse {
  chainCode: string;
  propertyCode: string;
  name: string;
  country: string;
  region: string;
}

export interface RoomSearchRequest {
  keyword: string;
  adultCount: number;
  childCount: number;
  checkInDate: Date;
  checkOutDate: Date;
}

export interface RoomSearchResponse {
  hotelName: string;
  address: string;
  checkInDate: Date;
  checkOutDate: Date;
  rooms: Room[];
}

export interface Room {
  roomType: string;
  price: number;
  description: string[];
  bookingCode: string;
  rateKey: string;
  available: boolean;
}
