import { useState } from 'react';

import { useFormikContext } from 'formik';
import InputMask from 'react-input-mask';
import { PhoneInput } from 'react-international-phone';

import Button from '@@components/Button';
import Detail from '@@components/Detail';
import Dropdown from '@@components/Dropdown';
import FilterGroup from '@@components/FilterGroup';
import Flex from '@@components/Flex';
import TextField from '@@components/TextField'; // 사용자 정의 Input
import { CREDIT_CARD_STRING } from '@@stores/book/constants';
import { HotelRulesResponse, ReservationRequest } from '@@stores/book/types';

import 'react-international-phone/style.css';

function ReservationConfirmSection({ rules }: { rules: HotelRulesResponse }) {
  const [phone, setPhone] = useState<string>('');
  const { getFieldProps, values, setValues, isValid, errors } = useFormikContext<ReservationRequest>();

  const cardList = Array.from(new Set(rules.acceptedCreditCard.map((v) => v.value)));

  return (
    <>
      <Detail
        title='Payment Card Info'
        data={{}}
        options={[
          {
            name: 'cardList',
            title: 'Accepted Credit Card',
            renderContent: cardList.map((v) => CREDIT_CARD_STRING[v] ?? v).join(', '),
          },
          {
            name: 'cardNumber',
            title: 'Card Number',
            renderContent: (
              <Flex.Horizontal gap={8}>
                <Dropdown
                  className='tw-w-[120px]'
                  options={cardList.map((card) => ({
                    value: card,
                    label: CREDIT_CARD_STRING[card] ?? card,
                  }))}
                  {...getFieldProps('paymentCardInfo.cardCode')}
                />
                <InputMask
                  mask='9999 9999 9999 9999' // 카드 번호
                  placeholder='Card Number'
                  {...getFieldProps('paymentCardInfo.cardNumber')}
                >
                  {(inputProps) => <TextField {...inputProps} errorMessage={errors.paymentCardInfo?.cardNumber} />}
                </InputMask>
              </Flex.Horizontal>
            ),
          },
          {
            name: 'cardExpireDate',
            title: 'Expiry Date',
            renderContent: (
              <InputMask mask='99/99' placeholder='MM/YY' {...getFieldProps('paymentCardInfo.cardExpireDate')}>
                {(inputProps) => <TextField {...inputProps} errorMessage={errors.paymentCardInfo?.cardExpireDate} />}
              </InputMask>
            ),
            size: 6,
          },
          {
            name: 'cardHolderName',
            title: 'Card Holder Name',
            renderContent: (
              <TextField
                {...getFieldProps('paymentCardInfo.cardHolderName')}
                placeholder='ex. Justin Rew'
                errorMessage={errors.paymentCardInfo?.cardHolderName}
              />
            ),
            size: 6,
          },
        ]}
      />
      <Detail
        title='Main Guest Info'
        data={{}}
        options={[
          {
            name: 'name',
            title: (
              <>
                Name
                <br />
                (Must match card holder name)
              </>
            ),
            renderContent: (
              <FilterGroup errorMessage={errors.travelerInfo?.travelerFirstName ?? errors.travelerInfo?.travelerLastName}>
                <Flex.Horizontal gap={8}>
                  <TextField placeholder='First Name' {...getFieldProps('travelerInfo.travelerFirstName')} />
                  <TextField placeholder='Last Name' {...getFieldProps('travelerInfo.travelerLastName')} />
                </Flex.Horizontal>
              </FilterGroup>
            ),
          },
          {
            name: 'travelerPhoneNumber',
            title: 'Phone Number',
            renderContent: (
              <FilterGroup errorMessage={errors.travelerInfo?.travelerCountryAccessCode ?? errors.travelerInfo?.travelerPhoneNumber}>
                <PhoneInput
                  defaultCountry='tw'
                  preferredCountries={['tw', 'kr', 'hk', 'sg', 'cn']}
                  value={phone}
                  onChange={(phone, { country }) => {
                    const number = phone.replace(`+${country.dialCode}`, '');
                    setPhone(phone);
                    setValues({
                      ...values,
                      travelerInfo: {
                        ...values.travelerInfo,
                        travelerCountryAccessCode: country.dialCode,
                        travelerPhoneNumber: number,
                      },
                    });
                  }}
                />
              </FilterGroup>
            ),
          },
        ]}
      />
      <TextField label='Request Comment' {...getFieldProps('requestComment')} placeholder='Please enter your request. (English Only)' />
      <Button.Medium style={{ marginTop: 30 }} type='submit' disabled={!isValid}>
        Reservation
      </Button.Medium>
    </>
  );
}

export default ReservationConfirmSection;
