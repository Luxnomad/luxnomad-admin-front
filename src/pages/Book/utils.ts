import { ReservationRequest } from '@@stores/book/types';

export const sanitizeReservationForm = (form: ReservationRequest): ReservationRequest => ({
  ...form,
  paymentCardInfo: {
    ...form.paymentCardInfo,
    cardExpireDate: form.paymentCardInfo.cardExpireDate.replace(/([^\d])/g, ''),
    cardNumber: form.paymentCardInfo.cardNumber.replace(/([^\d])/g, ''),
  },
});
