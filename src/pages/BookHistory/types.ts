import { Reservation } from '@@stores/book/types';

export type BookHistory = Pick<
  Reservation,
  | 'id'
  | 'created_at'
  | 'guest_name'
  | 'hotel_name'
  | 'status'
  | 'check_in'
  | 'check_out'
>;
