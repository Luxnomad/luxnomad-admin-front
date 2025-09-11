import Detail from '@@components/Detail';

function BookHistoryDetailHotelInfoSection() {
  return (
    <Detail
      title='Hotel Info'
      data={{
        hotelName: 'JW Marriott Marquis Hotel Dubai',
        address: 'Sheikh Zayed Road, Business Bay, Dubai, Emirate of Dubai, United Arab Emirates',
        roomType: 'Deluxe King Room',
        checkIn: '2025-10-20',
        checkOut: '2025-10-25',
        createdAt: '2025-09-10',
        guests: 2,
        status: 'Booked',
      }}
      options={[
        {
          name: 'hotelName',
          title: 'Hotel Name',
        },
        {
          name: 'address',
          title: 'Address',
        },
        {
          name: 'roomType',
          title: 'Room Type',
          size: 6,
        },
        {
          name: 'createdAt',
          title: 'Booked Date',
          size: 6,
        },
        {
          name: 'checkIn',
          title: 'Check In',
          size: 6,
        },
        {
          name: 'checkOut',
          title: 'Check Out',
          size: 6,
        },
        {
          name: 'guests',
          title: 'Guest Count',
          size: 6,
        },
        {
          name: 'status',
          title: 'Status',
          size: 6,
        },
      ]}
    />
  );
}

export default BookHistoryDetailHotelInfoSection;
