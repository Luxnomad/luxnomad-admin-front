import { useFormikContext } from 'formik';
import InputMask from 'react-input-mask';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import TextField from '@@components/TextField'; // 사용자 정의 Input
import { ReservationRequest } from '@@stores/book/types';

const Section = styled(Flex.Vertical)`
  gap: 12px;
  .title {
    font-size: 28px;
    font-weight: bold;
  }
`;

function ReservationConfirmSection() {
  const { getFieldProps } = useFormikContext<ReservationRequest>();

  return (
    <>
      <Section>
        <h1 className='title'>Payment Info</h1>
        <Row>
          <Col md={6}>
            <InputMask
              mask='9999 9999 9999 9999' // 카드 번호
              {...getFieldProps('paymentCardInfo.cardNumber')}
            >
              {(inputProps) => <TextField {...inputProps} placeholder='Card Number' />}
            </InputMask>
          </Col>
          <Col md={3}>
            <InputMask
              mask='99/99' // MM/YY
              {...getFieldProps('paymentCardInfo.cardExpireDate')}
            >
              {(inputProps) => <TextField {...inputProps} placeholder='MM/YY' />}
            </InputMask>
          </Col>
          <Col md={3}>
            <InputMask
              mask='999' // CVC
              {...getFieldProps('paymentCardInfo.cardCode')}
            >
              {(inputProps) => <TextField {...inputProps} placeholder='CVC' />}
            </InputMask>
          </Col>
        </Row>
      </Section>

      <Section>
        <h1 className='title'>Traveler Info</h1>
        <Row>
          <Col md={6}>
            <TextField placeholder='First Name' {...getFieldProps('travelerInfo.travelerFirstName')} />
          </Col>
          <Col md={6}>
            <TextField placeholder='Last Name' {...getFieldProps('travelerInfo.travelerLastName')} />
          </Col>
        </Row>
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

      <Section>
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
      </Section>
      <Button style={{ marginTop: 30 }} type='submit'>
        Reservation
      </Button>
    </>
  );
}

export default ReservationConfirmSection;
