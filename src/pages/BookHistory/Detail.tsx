import { Formik } from 'formik';

import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import { memoSchema } from '@@constants/schema';
import { useRetrieveDetail } from '@@stores/retrieve/hooks';

import BookHistoryDetailCustomerInfoSection from './parts/BookHistoryDetailCustomerInfoSection';
import BookHistoryDetailHeaderContent from './parts/BookHistoryDetailHeaderContent';
import BookHistoryDetailHotelInfoSection from './parts/BookHistoryDetailHotelInfoSection';
import BookHistoryDetailMemoFormContent from './parts/BookHistoryDetailMemoFormContent';
import BookHistoryDetailPaymentInfoSection from './parts/BookHistoryDetailPaymentInfoSection';
import { BookHistoryMemoForm } from './types';

function BookHistoryDetail() {
  const { data } = useRetrieveDetail();

  const handleSubmitMemo = () => {};

  if (!data) {
    return null;
  }

  const initialValues: BookHistoryMemoForm = {
    reservationId: data.reservationId ?? '',
    memo: '',
  };

  return (
    <PageTemplate headerContent={<BookHistoryDetailHeaderContent />}>
      <Flex.Vertical gap={24}>
        <BookHistoryDetailHotelInfoSection />
        <BookHistoryDetailPaymentInfoSection />
        <BookHistoryDetailCustomerInfoSection />
        {data.status !== 'CANCELLED' && (
          <Formik initialValues={initialValues} onSubmit={handleSubmitMemo} validationSchema={memoSchema}>
            <BookHistoryDetailMemoFormContent />
          </Formik>
        )}
      </Flex.Vertical>
    </PageTemplate>
  );
}

export default BookHistoryDetail;
