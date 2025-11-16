export interface BookListRequest {
  status?: string;
  checkInDate?: string;
  checkoutDate?: string;
  page: number;
}

export interface BookListResponse {
  reservationId: string; // 예약 코드 travelport
  confirmationNumber: string; // 예약 코드 supplier
  hotelName: string; // 호텔 이름
  bookerName: string; // 예약자 이름 (투숙객)
  checkinDate: Date; // 체크인 날짜
  checkoutDate: Date; // 체크아웃 날짜
  status: string; // 예약 상태
  bookedDate: Date; // 예약한 날짜
  bookerId: string; // 예약한 사용자 ID (직접 예약한 adminId 혹은 userId)
}

export interface RetrieveResponse {
  reservationId: string;
  bookingCode: string;
  confirmationNumber: string;
  rateCode: string;
  hotelName: string;
  hotelAddress: string;
  hotelPhone: string;
  roomType: RoomTypeResponse;
  bookedDate: Date;
  checkInDate: Date;
  checkOutDate: Date;
  guestCount: string;
  status: string;
  cancelDeadline: Date;
  canceled: boolean;
  cancellationPolicy: string;
  price: number;
  currency: string;
  paymentAmount: number;
  cardExpireDate: string;
  cardType: string;
  holderName: string;
  cardNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerCountryCode: string;
  specialInstruction: string;
}

export interface RoomTypeResponse {
  wifiIncluded: boolean;
  bedConfigurationResponse: BedConfigurationResponse;
  roomDescriptionResponse: RoomDescriptionResponse;
}

export interface BedConfigurationResponse {
  quantity: number;
  bedType: string;
  size: string;
}

export interface RoomDescriptionResponse {
  value?: string;
}

export interface CancelRequest {
  bookingIdentifier: string;
  confirmationNumber: string;
}

export interface ModifyRequest {
  // LL 고정
  source: string;
  // Confirmation Code
  value: string;
  // Request Memo
  commentValue: string;
}
