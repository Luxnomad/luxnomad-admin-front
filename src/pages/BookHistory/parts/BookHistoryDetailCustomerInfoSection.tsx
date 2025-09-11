import Detail from '@@components/Detail';

function BookHistoryDetailCustomerInfoSection() {
  return (
    <Detail
      title='Customer Info'
      data={{
        firstName: 'Wongil',
        lastName: 'Kim',
        phoneNumber: '01032841112',
        email: 'judgevi52@gmail.com',
        countryAccessCode: '82',
        localCityCode: '82',
        cityCode: '82',
      }}
      options={[
        {
          name: 'name',
          title: 'Name',
          renderContent: ({ firstName, lastName }) => `${firstName} ${lastName}`,
          size: 6,
        },
        {
          name: 'phoneNumber',
          title: 'Phone',
          size: 6,
        },
        {
          name: 'email',
          title: 'Email',
          size: 6,
        },
        {
          name: 'countryAccessCode',
          title: 'Country Code',
          size: 6,
        },
      ]}
    />
  );
}

export default BookHistoryDetailCustomerInfoSection;
