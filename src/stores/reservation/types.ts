export interface ReservationRequest {
  // 호텔체인코드 (예: "HH")
  chainCode: string;

  // 호텔코드 (예: "A7691")
  propertyCode: string;

  // 예약코드 (예: "K00BFKK")
  bookingCode: string;

  // 예약인원 (예: 2)
  guests: number;

  // 예약 객실 수 (예: 2)
  roomQuantity: number;

  // 체크인 날짜
  checkin: Date;

  // 체크아웃 날짜
  checkout: Date;

  // 화폐 단위 (예: "KRW")
  priceCurrencyCode: string;

  // 총금액 (예: 260000)
  totalPrice: number;

  // 결제 화폐 단위 (예: "USD")
  paymentCurrencyCode: string;

  // 지불할 총금액 (예: 191.82)
  paymentAmount: number;

  // 카드 만료 년월 (형식: MMYY, 예: "0626")
  cardExpireDate: string;

  // 카드 종류 (예: "Credit")
  cardType: string;

  // 카드 코드 (예: "CA")
  cardCode: string;

  // 카드 소유자 이름 (예: "Smith")
  cardHolderName: string;

  // 카드 번호 (예: "123124512")
  cardNumber: string;

  // CVC 코드 (예: "121")
  cardSeriesCode: string;

  // 여행자 이름 (예: "Smith")
  travelerFirstName: string;

  // 여행자 성 (예: "John")
  travelerLastName: string;

  // 성별 (예: "male")
  gender: string;

  // 전화번호 (예: "123213213")
  travelerPhoneNumber: string;

  // 국가 코드 (예: "82")
  travelerCountryAccessCode: string;

  // 이메일 (예: "smith@gmail.com")
  travelerEmail: string;
}
