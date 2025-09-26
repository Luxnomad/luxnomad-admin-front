import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
// import Pagination from '@@components/Pagination';
import Table from '@@components/Table';
import { BookingHistoryDetailLink } from '@@constants/links';
import { useRetrieveList } from '@@stores/retrieve/hooks';

import BookHistoryListFilter from './parts/BookHistoryListFilter';

function BookHistory() {
  useRetrieveList();

  return (
    <PageTemplate headerContent='Book History'>
      <BookHistoryListFilter />
      <Flex.Vertical className='tw-mt-[30px]'>
        <Table
          columns={[
            { name: 'no', title: 'No' },
            { name: 'code', title: 'Code', renderContent: ({ code }) => <BookingHistoryDetailLink id={code} /> },
            { name: 'hotelName', title: 'Hotel Name' },
            { name: 'guestName', title: 'Booker Name' },
            { name: 'checkIn', title: 'Checkin Date' },
            { name: 'checkOut', title: 'Checkout Date' },
            { name: 'status', title: 'Status' },
            { name: 'createdAt', title: 'Booked Date' },
          ]}
          rows={[
            {
              no: 1,
              code: 'BKD_202509100001',
              hotelName: 'JW Marriott Marquis Hotel Dubai',
              guestName: 'Wongil Kim',
              checkIn: '2025-10-20',
              checkOut: '2025-10-25',
              status: 'Booked',
              createdAt: '2025-09-10',
            },
          ]}
        />
        {/* <Pagination count={count} page={search.page} onChange={(page) => setSearch({ ...search, page })} /> */}
      </Flex.Vertical>
    </PageTemplate>
  );
}

export default BookHistory;
