import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import { useRetrieveDetail } from '@@stores/retrieve/hooks';

import BookHistoryDetailCustomerInfoSection from './parts/BookHistoryDetailCustomerInfoSection';
import BookHistoryDetailHotelInfoSection from './parts/BookHistoryDetailHotelInfoSection';
import BookHistoryDetailPaymentInfoSection from './parts/BookHistoryDetailPaymentInfoSection';

function BookHistoryDetail() {
  const data = useRetrieveDetail();

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
