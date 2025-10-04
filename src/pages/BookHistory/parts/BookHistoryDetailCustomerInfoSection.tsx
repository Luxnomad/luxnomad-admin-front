import Detail from '@@components/Detail';
import { useRetrieveDetail } from '@@stores/retrieve/hooks';

function BookHistoryDetailCustomerInfoSection() {
  const { data } = useRetrieveDetail();

  if (!data) {
    return null;
  }

  return (
    <Detail
      title='Customer Info'
      data={data}
      options={[
        {
          name: 'customerName',
          title: 'Name',
          size: 6,
        },
        {
          name: 'customerPhone',
          title: 'Phone',
          size: 6,
        },
        {
          name: 'customerEmail',
          title: 'Email',
          size: 6,
        },
        {
          name: 'customerCountryCode',
          title: 'Country Code',
          size: 6,
        },
        {
          name: 'specialInstruction',
          title: 'Special Instruction',
        },
      ]}
    />
  );
}

export default BookHistoryDetailCustomerInfoSection;
