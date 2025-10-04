import Detail from '@@components/Detail';
import { useRetrieveDetail } from '@@stores/retrieve/hooks';

function BookHistoryDetailHotelInfoSection() {
  const { data } = useRetrieveDetail();

  if (!data) {
    return null;
  }

  return (
    <Detail
      title='Book Info'
      data={data}
      options={[
        {
          name: 'reservationId',
          title: 'Reservation ID',
          size: 6,
        },
        {
          name: 'bookingCode',
          title: 'Booking Code',
          size: 6,
        },
        {
          name: 'confirmationNumber',
          title: 'Confirmation Number',
          size: 6,
        },
        {
          name: 'rateId',
          title: 'Rate ID',
          size: 6,
        },
        {
          name: 'hotelName',
          title: 'Hotel Name',
          size: 6,
        },
        {
          name: 'hotelAddress',
          title: 'Hotel Address',
          size: 6,
        },
        {
          name: 'hotelPhone',
          title: 'Hotel Phone',
          size: 6,
        },
        {
          name: 'roomType',
          title: 'Room Type',
          size: 6,
        },
        {
          name: 'bookedDate',
          title: 'Booked Date',
          size: 6,
        },
        {
          name: 'guestCount',
          title: 'Guest Count',
        },
        {
          name: 'checkInDate',
          title: 'Check In Date',
          size: 6,
        },
        {
          name: 'checkOutDate',
          title: 'Check Out Date',
          size: 6,
        },
        {
          name: 'status',
          title: 'Status',
          size: 6,
        },
        {
          name: 'cancelDeadline',
          title: 'Cancel Deadline',
          size: 6,
        },
        {
          name: 'cancellationPolicy',
          title: 'Cancellation Policy',
          size: 6,
        },
        {
          name: 'price',
          title: 'Price',
          size: 6,
        },
      ]}
    />
  );
}

export default BookHistoryDetailHotelInfoSection;
