import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
// import Pagination from '@@components/Pagination';
import Table from '@@components/Table';

import BookHistoryListFilter from './parts/BookHistoryListFilter';

function BookHistory() {
  return (
    <PageTemplate headerContent='Book History'>
      <BookHistoryListFilter />
      <Flex.Vertical className='tw-mt-[30px]'>
        <Table
          columns={[
            { name: 'id', title: 'No' },
            { name: 'hotel_name', title: 'Hotel Name' },
            { name: 'guest_name', title: 'Booker Name' },
            { name: 'check_in', title: 'Checkin Date' },
            { name: 'check_out', title: 'Checkout Date' },
            { name: 'status', title: 'Status' },
            { name: 'created_at', title: 'Booked Date' },
          ]}
          rows={[]}
        />
        {/* <Pagination count={count} page={search.page} onChange={(page) => setSearch({ ...search, page })} /> */}
      </Flex.Vertical>
    </PageTemplate>
  );
}

export default BookHistory;
