export interface BookState {
  initialSearch: boolean;
  roomResponse?: RoomSearchResponse;
}

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
  rates: RateInfo[];
}

export interface RateInfo {
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
  end?: Date;
}

export interface HotelPenalty {
  appliesTo: string;
  percent: number;
}

export interface AcceptedCreditCard {
  value: string;
}

export interface ReservationRequest {
  hotelInfo: HotelInfoRequest;
  priceInfo?: PriceInfoRequest;
  paymentCardInfo: PaymentCardInfoRequest;
  travelerInfo: TravelerInfoRequest;
  addressInfo: AddressInfoRequest;
}

export interface HotelInfoRequest {
  bookingCode: string;
  roomQuantity: number; // Java long → number
  guests: number; // Java int → number
  hotelPropertyCode: string;
  hotelChainCode: string;
  checkin: string; // Java LocalDate → string (ISO-8601)
  checkout: string; // Java LocalDate → string (ISO-8601)
}

export interface PriceInfoRequest {
  priceCurrencyCode: string;
  totalPrice: number; // Java double → number
  paymentCurrencyCode: string;
  paymentAmount: number; // Java double → number
  rateCodeValue: string;
  rateCodeName: string;
  rateCodeId: string;
}

export interface PaymentCardInfoRequest {
  cardExpireDate: string;
  cardType: string;
  cardCode: string;
  cardHolderName: string;
  cardNumber: string;
  cardSeriesCode: string;
  cardTelephoneCountryAccessCode: string;
  cardTelephoneAreaCityCode: string;
  cardTelephoneCityCode: string;
}

export interface TravelerInfoRequest {
  travelerFirstName: string;
  travelerLastName: string;
  travelerPhoneNumber: string;
  travelerEmail: string;
  travelerCountryAccessCode: string;
  travelerLocalCityCode: string;
  travelerCityCode: string;
}

export interface AddressInfoRequest {
  addressNumberValue: string;
  addressStreet: string;
  addressLine: string;
  addressCity: string;
  addressCounty: string;
  addressStateProvValue: string;
  addressStateProvName: string;
  addressCountryValue: string;
  addressCountryId: string;
  addressCountryName: string;
  addressCountryCodeContext: string;
  addressPostalCode: string;
}
