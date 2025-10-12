import { useRef } from 'react';

import { format } from 'date-fns';
import { Formik } from 'formik';
import html2pdf from 'html2pdf.js';

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
  const ref = useRef<HTMLDivElement>(null);

  const handleSubmitMemo = () => {};

  const handleExportClick = async () => {
    const contentElement = ref.current;
    if (!contentElement || !data) return;

    const option = {
      // margin: 10,
      margin: [12, 12, 12, 12], // 마진을 배열로 설정하여 용지 여백없이 꽉 차게 export 할 수 있었다.
      // filename: "cluster_results.pdf",
      filename: `${data.hotelName}_${format(data.checkInDate, 'yyyyMMdd')}_${format(data.checkOutDate, 'yyyyMMdd')}_reservation_info.pdf`, // 파일 이름을 props로 받는다.
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
      html2pdf().from(contentElement).set(option).save();
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return null;
  }

  const initialValues: BookHistoryMemoForm = {
    reservationId: data.reservationId ?? '',
    memo: '',
  };

  return (
    <PageTemplate headerContent={<BookHistoryDetailHeaderContent handleSave={handleExportClick} />}>
      <Flex.Vertical gap={24}>
        <Flex.Vertical gap={24} ref={ref}>
          <BookHistoryDetailHotelInfoSection />
          <BookHistoryDetailPaymentInfoSection />
          <BookHistoryDetailCustomerInfoSection />
        </Flex.Vertical>
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
