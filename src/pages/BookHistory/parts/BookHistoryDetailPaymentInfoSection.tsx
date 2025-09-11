import Detail from '@@components/Detail';

function BookHistoryDetailPaymentInfoSection() {
  return (
    <Detail
      title='Payment Info'
      data={{
        priceCurrencyCode: 'KRW',
        totalPrice: 1000000,
        paymentCurrencyCode: 'KRW',
        paymentAmount: 1000000,
        cardExpireDate: '08/26',
        cardType: 'Master Card',
        cardHolderName: 'Wongil Kim',
        cardNumber: '1234-****-****-****',
      }}
      options={[
        {
          name: 'price',
          title: 'Price',
          renderContent: ({ priceCurrencyCode, totalPrice }) => `${totalPrice.toLocaleString()} ${priceCurrencyCode}`,
          size: 6,
        },
        {
          name: 'paymentAmount',
          title: 'Payment Amount',
          renderContent: ({ paymentCurrencyCode, paymentAmount }) => `${paymentAmount.toLocaleString()} ${paymentCurrencyCode}`,
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
          name: 'cardHolderName',
          title: 'Holder Name',
          size: 6,
        },
        {
          name: 'cardNumber',
          title: 'Card Number',
          size: 6,
        },
      ]}
    />
  );
}

export default BookHistoryDetailPaymentInfoSection;
