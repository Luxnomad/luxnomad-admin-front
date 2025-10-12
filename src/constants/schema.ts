import { object, string } from 'yup';

export const memoSchema = object({
  memo: string().required('Memo content is required field.'),
});

export const reservationSchema = object({
  paymentCardInfo: object({
    cardExpireDate: string().required('This field is required.'),
    cardCode: string().required('This field is required.'),
    cardHolderName: string().required('This field is required.'),
    cardNumber: string().required('This field is required.'),
  }),
  travelerInfo: object({
    travelerFirstName: string().required('This field is required.'),
    travelerLastName: string().required('This field is required.'),
    travelerPhoneNumber: string().required('This field is required.'),
    travelerCountryAccessCode: string().required('This field is required.'),
  }),
});
