import Detail from '@@components/Detail';
import { CREDIT_CARD_STRING } from '@@stores/book/constants';
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
          renderContent: ({ cardExpireDate }) => cardExpireDate.replace(/(\d{2})(\d{2})/g, '$1/$2'),
          size: 6,
        },
        {
          name: 'cardType',
          title: 'Card Type',
          renderContent: ({ cardType }) => CREDIT_CARD_STRING[cardType],
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
