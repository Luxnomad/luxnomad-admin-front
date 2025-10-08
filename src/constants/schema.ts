import { object, string } from 'yup';

export const memoSchema = object({
  memo: string().required('Memo content is required field.'),
});

export const reservationSchema = object({
  paymentCardInfo: object({
    cardExpireDate: string().required('Please enter your card expire date'),
    cardCode: string().required('Please select your card type'),
    cardHolderName: string().required('Please enter your card holder name'),
    cardNumber: string().required('Please enter your card number'),
  }),
  travelerInfo: object({
    travelerFirstName: string().required('Please entar traveler name'),
    travelerLastName: string().required('Please entar traveler name'),
    travelerPhoneNumber: string().required('Please entar traveler phone number'),
    travelerCountryAccessCode: string().required('Please entar traveler phone number'),
  }),
});
