import { useRef } from 'react';

import { format } from 'date-fns';
import { Formik } from 'formik';
import html2pdf from 'html2pdf.js';
import { useDispatch } from 'react-redux';

import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { memoSchema } from '@@constants/schema';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { useRetrieveDetail } from '@@stores/retrieve/hooks';
import { modifyRetrieveFailure, modifyRetrieveRequest, modifyRetrieveSuccess } from '@@stores/retrieve/reducer';

import BookHistoryDetailCustomerInfoSection from './parts/BookHistoryDetailCustomerInfoSection';
import BookHistoryDetailHeaderContent from './parts/BookHistoryDetailHeaderContent';
import BookHistoryDetailHotelInfoSection from './parts/BookHistoryDetailHotelInfoSection';
import BookHistoryDetailMemoFormContent from './parts/BookHistoryDetailMemoFormContent';
import BookHistoryDetailPaymentInfoSection from './parts/BookHistoryDetailPaymentInfoSection';
import { BookHistoryMemoForm } from './types';

function BookHistoryDetail() {
  const dispatch = useDispatch();
  const { data, mutate } = useRetrieveDetail();
  const ref = useRef<HTMLDivElement>(null);

  const handleSubmitMemo = (form: BookHistoryMemoForm) => {
    if (window.confirm('Are you sure you want change this request?')) {
      dispatch(
        modifyRetrieveRequest({
          request: {
            value: form.value,
            commentValue: form.commentValue,
            source: form.source,
          },
          reservationId: form.reservationId,
        })
      );
    }
  };

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

  useActionSubscribe({
    type: modifyRetrieveSuccess.type,
    callback: () => {
      showSuccessToast('Change request successfully!');
      mutate();
    },
  });

  useActionSubscribe({
    type: modifyRetrieveFailure.type,
    callback: ({ payload }: ReturnType<typeof modifyRetrieveFailure>) => {
      showErrorToast(payload);
    },
  });

  if (!data) {
    return null;
  }

  const initialValues: BookHistoryMemoForm = {
    reservationId: data.reservationId ?? '',
    commentValue: '',
    value: data.confirmationNumber,
    source: 'LL',
  };

  return (
    <PageTemplate headerContent={<BookHistoryDetailHeaderContent handleSave={handleExportClick} />}>
      <Flex.Vertical gap={24}>
        <Flex.Vertical gap={24} ref={ref}>
          <BookHistoryDetailHotelInfoSection />
          <BookHistoryDetailPaymentInfoSection />
          <BookHistoryDetailCustomerInfoSection />
        </Flex.Vertical>
        {!data.canceled && (
          <Formik initialValues={initialValues} onSubmit={handleSubmitMemo} validationSchema={memoSchema}>
            <BookHistoryDetailMemoFormContent />
          </Formik>
        )}
      </Flex.Vertical>
    </PageTemplate>
  );
}

export default BookHistoryDetail;
