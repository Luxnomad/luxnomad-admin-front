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
  adultCount: number;
  childCount: number;
  checkIn: string;
  checkOut: string;
}

export interface RoomSearchResponse {
  hotelName: string;
  description: string;
  hotelImages: string[];
  address: string;
  rooms: Room[];
}

export interface Room {
  roomType: string;
  viewType: string;
  roomImage: string;
  bedType: string;
  bedQuantity: number;
  price: number;
  currency: string;
  rateDescription: string;
  rateKey: string;
}
