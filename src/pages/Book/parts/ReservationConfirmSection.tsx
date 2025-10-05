import { useFormikContext } from 'formik';
import InputMask from 'react-input-mask';
import { PhoneInput } from 'react-international-phone';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import Button from '@@components/Button';
import Detail from '@@components/Detail';
import Dropdown from '@@components/Dropdown';
import Flex from '@@components/Flex';
import TextField from '@@components/TextField'; // 사용자 정의 Input
import { CREDIT_CARD_STRING } from '@@stores/book/constants';
import { HotelRulesResponse, ReservationRequest } from '@@stores/book/types';

const Section = styled(Flex.Vertical)`
  gap: 12px;
  .title {
    font-size: 28px;
    font-weight: bold;
  }
`;

function ReservationConfirmSection({ rules }: { rules: HotelRulesResponse }) {
  const { getFieldProps } = useFormikContext<ReservationRequest>();

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
                  {(inputProps) => <TextField {...inputProps} />}
                </InputMask>
              </Flex.Horizontal>
            ),
          },
          {
            name: 'cardExpireDate',
            title: 'Expire Date',
            renderContent: (
              <InputMask
                mask='99/99' // 카드 번호
                placeholder='MM/YY'
                {...getFieldProps('paymentCardInfo.cardExpireDate')}
              >
                {(inputProps) => <TextField {...inputProps} />}
              </InputMask>
            ),
            size: 6,
          },
          {
            name: 'cardHolderName',
            title: 'Card Holder Name',
            renderContent: <TextField {...getFieldProps('paymentCardInfo.cardHolderName')} placeholder='ex. Justin Rew' />,
            size: 6,
          },
        ]}
      />
      <Detail
        title='Traveler Info'
        data={{}}
        options={[
          {
            name: 'name',
            title: 'Name',
            renderContent: (
              <Flex.Horizontal gap={8}>
                <TextField placeholder='First Name' {...getFieldProps('travelerInfo.travelerFirstName')} />
                <TextField placeholder='Last Name' {...getFieldProps('travelerInfo.travelerLastName')} />
              </Flex.Horizontal>
            ),
          },
          {
            name: 'travelerPhoneNumber',
            title: 'Phone Number',
            renderContent: <PhoneInput defaultCountry='ua' />,
          },
        ]}
      />
      <Section>
        <h1 className='title'>Traveler Info</h1>
        <Row>
          <Col md={6}>
            <InputMask
              mask='999-9999-9999' // 예: 한국 휴대폰 번호
              {...getFieldProps('travelerInfo.travelerPhoneNumber')}
            >
              {(inputProps) => <TextField {...inputProps} placeholder='Phone Number' />}
            </InputMask>
          </Col>
        </Row>
      </Section>
      {/* <Section>
        <h1 className='title'>Address Info</h1>
        <Row>
          <Col md={6}>
            <TextField placeholder='Street' {...getFieldProps('addressInfo.addressStreet')} />
          </Col>
          <Col md={6}>
            <TextField placeholder='City' {...getFieldProps('addressInfo.addressCity')} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <InputMask
              mask='99999' // 우편번호 5자리
              {...getFieldProps('addressInfo.addressPostalCode')}
            >
              {(inputProps) => <TextField {...inputProps} placeholder='Postal Code' />}
            </InputMask>
          </Col>
        </Row>
      </Section> */}
      <Button style={{ marginTop: 30 }} type='submit'>
        Reservation
      </Button>
    </>
  );
}

export default ReservationConfirmSection;
