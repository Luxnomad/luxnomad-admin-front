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
