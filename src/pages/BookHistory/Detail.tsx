import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';

import BookHistoryDetailCustomerInfoSection from './parts/BookHistoryDetailCustomerInfoSection';
import BookHistoryDetailHotelInfoSection from './parts/BookHistoryDetailHotelInfoSection';
import BookHistoryDetailPaymentInfoSection from './parts/BookHistoryDetailPaymentInfoSection';

function BookHistoryDetail() {
  return (
    <PageTemplate headerContent='Book Detail'>
      <Flex.Vertical gap={24}>
        <BookHistoryDetailHotelInfoSection />
        <BookHistoryDetailPaymentInfoSection />
        <BookHistoryDetailCustomerInfoSection />
      </Flex.Vertical>
    </PageTemplate>
  );
}

export default BookHistoryDetail;
