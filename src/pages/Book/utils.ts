import { ReservationRequest } from '@@stores/book/types';

export const sanitizeReservationForm = (form: ReservationRequest): ReservationRequest => ({
  ...form,
  paymentCardInfo: {
    ...form.paymentCardInfo,
    cardExpireDate: form.paymentCardInfo.cardExpireDate.replace(/\//g, ''),
  },
});
