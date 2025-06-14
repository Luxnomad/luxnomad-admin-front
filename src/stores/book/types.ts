export interface HotelSearchResponse {
  chainCode: string;
  propertyCode: string;
  name: string;
  country: string;
  region: string;
}

export interface RoomSearchRequest {
  chainCode: string;
  propertyCode: string;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfGuest: number;
  onlyAvailable: boolean;
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
