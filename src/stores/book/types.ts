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

export interface HotelRulesResponse {
  bookingCode: string;
  hotelName: string;
  price: number;
  currency: string;
  guarantee: string;
  cancelPenalty: CancelPenalty[];
  acceptedCreditCard: AcceptedCreditCard[];
  description: string[];
  mealsIncluded: boolean;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  ratePaymentInfo: string;
  benefit: string;
}

export interface CancelPenalty {
  description: string;
  deadline: Deadline;
  hotelPenalty: HotelPenalty;
  refundable: boolean;
}

export interface Deadline {
  start: Date;
  end: Date;
}

export interface HotelPenalty {
  appliesTo: string;
  percent: number;
}

export interface AcceptedCreditCard {
  value: string;
}
