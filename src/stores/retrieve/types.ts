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
  roomType: string;
  bookedDate: Date;
  checkInDate: Date;
  checkOutDate: Date;
  guestCount: string;
  status: string;
  cancelDeadline: Date;
  cancellationPolicy: string;
  price: number;
  paymentAmount: number;
  cardExpireDate: Date;
  cardType: string;
  holderName: string;
  cardNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerCountryCode: string;
  specialInstruction: string;
}

export interface CancelRequest {
  bookingIdentifier: string;
  confirmationNumber: string;
}
