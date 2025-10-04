import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
// import Pagination from '@@components/Pagination';
import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { BookingHistoryDetailLink } from '@@constants/links';
import { useRetrieveList } from '@@stores/retrieve/hooks';
import { getRowNumber } from '@@utils/pages';

import BookHistoryListFilter from './parts/BookHistoryListFilter';

function BookHistory() {
  const { content, page } = useRetrieveList();

  return (
    <PageTemplate headerContent='Book History'>
      <BookHistoryListFilter />
      <Flex.Vertical className='tw-mt-[30px]'>
        <Table
          columns={[
            {
              name: 'no',
              title: 'No',
              renderContent: getRowNumber(page.total, page.current, page.limit),
            },
            {
              name: 'reservationId',
              title: 'Reservation ID',
              renderContent: ({ reservationId }) => <BookingHistoryDetailLink id={reservationId} />,
            },
            {
              name: 'confirmationNumber',
              title: 'Confirmation Number',
            },
            {
              name: 'hotelName',
              title: 'Hotel Name',
            },
            {
              name: 'bookerName',
              title: 'Booker Name',
            },
            {
              name: 'checkinDate',
              title: 'Check In Date',
            },
            {
              name: 'checkoutDate',
              title: 'Check Out Date',
            },
            {
              name: 'status',
              title: 'Status',
            },
            {
              name: 'bookedDate',
              title: 'Booked Date',
            },
            {
              name: 'bookerId',
              title: 'Booker ID',
            },
          ]}
          rows={content ?? []}
        />
        <Pagination lastPage={page.lastPage} current={page.current} />
      </Flex.Vertical>
    </PageTemplate>
  );
}

export default BookHistory;
