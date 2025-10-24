import Detail from '@@components/Detail';
import Typography from '@@components/Typography';
import { useRetrieveDetail } from '@@stores/retrieve/hooks';

function BookHistoryDetailHotelInfoSection() {
  const { data } = useRetrieveDetail();

  if (!data) {
    return null;
  }

  return (
    <Detail
      title='Reservation Confirmation'
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
          name: 'rateCode',
          title: 'Rate Code',
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
          name: 'wifiIncluded',
          title: 'Free Wifi',
          renderContent: ({ roomType: { wifiIncluded } }) => (
            <Typography.Body2 color={wifiIncluded ? 'green' : 'red'}>{wifiIncluded ? 'O' : 'X'}</Typography.Body2>
          ),
          size: 6,
        },
        {
          name: 'bedConfigurationResponse',
          title: 'Bed Info',
          renderContent: ({ roomType: { bedConfigurationResponse } }) =>
            `${bedConfigurationResponse.bedType} (${bedConfigurationResponse.size}) * ${bedConfigurationResponse.quantity}`,
          size: data.roomType.roomDescriptionResponse.value ? 6 : 12,
        },
        {
          name: 'roomDescriptionResponse',
          title: 'Room Description',
          renderContent: ({ roomType: { roomDescriptionResponse } }) => roomDescriptionResponse.value,
          size: 6,
          hidden: !!data.roomType.roomDescriptionResponse.value,
        },
        {
          name: 'bookedDate',
          title: 'Booked Date',
          size: 6,
        },
        {
          name: 'guestCount',
          title: 'Guest Count',
          size: 6,
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
          renderContent: ({ price, currency }) => `${price.toLocaleString()} ${currency}`,
          size: 6,
        },
      ]}
    />
  );
}

export default BookHistoryDetailHotelInfoSection;
