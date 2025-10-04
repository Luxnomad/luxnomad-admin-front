import Detail from '@@components/Detail';
import { useRetrieveDetail } from '@@stores/retrieve/hooks';

function BookHistoryDetailPaymentInfoSection() {
  const { data } = useRetrieveDetail();

  if (!data) {
    return null;
  }

  return (
    <Detail
      title='Payment Info'
      data={data}
      options={[
        {
          name: 'paymentAmount',
          title: 'Payment Amount',
          size: 6,
        },
        {
          name: 'cardExpireDate',
          title: 'Card Expire Date',
          size: 6,
        },
        {
          name: 'cardType',
          title: 'Card Type',
          size: 6,
        },
        {
          name: 'holderName',
          title: 'Holder Name',
          size: 6,
        },
        {
          name: 'cardNumber',
          title: 'Card Number',
          size: 12,
        },
      ]}
    />
  );
}

export default BookHistoryDetailPaymentInfoSection;
