import { Formik } from 'formik';
import { useParams } from 'react-router-dom';

import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import { memoSchema } from '@@constants/schema';

import BookHistoryDetailCustomerInfoSection from './parts/BookHistoryDetailCustomerInfoSection';
import BookHistoryDetailHeaderContent from './parts/BookHistoryDetailHeaderContent';
import BookHistoryDetailHotelInfoSection from './parts/BookHistoryDetailHotelInfoSection';
import BookHistoryDetailMemoFormContent from './parts/BookHistoryDetailMemoFormContent';
import BookHistoryDetailPaymentInfoSection from './parts/BookHistoryDetailPaymentInfoSection';
import { BookHistoryMemoForm } from './types';

function BookHistoryDetail() {
  const { id } = useParams();

  const handleSubmitMemo = () => {};

  const initialValues: BookHistoryMemoForm = {
    reservationId: id ?? '',
    memo: '',
  };

  return (
    <PageTemplate headerContent={<BookHistoryDetailHeaderContent />}>
      <Flex.Vertical gap={24}>
        <BookHistoryDetailHotelInfoSection />
        <BookHistoryDetailPaymentInfoSection />
        <BookHistoryDetailCustomerInfoSection />
        <Formik initialValues={initialValues} onSubmit={handleSubmitMemo} validationSchema={memoSchema}>
          <BookHistoryDetailMemoFormContent />
        </Formik>
      </Flex.Vertical>
    </PageTemplate>
  );
}

export default BookHistoryDetail;
