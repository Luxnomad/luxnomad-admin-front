import { Form, useFormikContext } from 'formik';
import styled from 'styled-components';

import Detail from '@@components/Detail';
import Flex from '@@components/Flex';
import PageTemplate from '@@components/PageTemplate';
import Title from '@@components/Title';
import Typography from '@@components/Typography';
import ReservationConfirmSection from '@@pages/Book/parts/ReservationConfirmSection';
import { HotelRulesResponse, RateInfo, ReservationRequest, Room } from '@@stores/book/types';

const StyledReservationFormContent = styled(PageTemplate)``;

function ReservationFormContent({ room, rules, rate }: { room: Room; rules: HotelRulesResponse; rate: RateInfo }) {
  const { handleSubmit } = useFormikContext<ReservationRequest>();

  return (
    <Form onSubmit={handleSubmit}>
      <StyledReservationFormContent headerContent={`[${rules.bookingCode}] ${rules.hotelName} - ${room.roomType}`}>
        <Flex.Vertical gap={24}>
          <Detail
            title='Reservation Details'
            data={rules}
            options={[
              {
                name: 'rateCode',
                title: 'Rate Code',
                renderContent: rate.rateCode,
                size: 6,
              },
              {
                name: 'partnetship',
                title: 'Program',
                renderContent: rate.partnershipName,
                size: 6,
              },
              {
                name: 'checkInDate',
                title: 'Check in',
                renderContent: ({ checkInDate, checkInTime }) => `${checkInDate} ${checkInTime}`,
                size: 6,
              },
              {
                name: 'checkOutDate',
                title: 'Check out',
                renderContent: ({ checkOutDate, checkOutTime }) => `${checkOutDate} ${checkOutTime}`,
                size: 6,
              },
              {
                name: 'price',
                title: (
                  <>
                    Total Rate
                    <br />
                    (Tax Included)
                  </>
                ),
                renderContent: ({ price, currency }) => (
                  <Typography.Body2>
                    {price.toLocaleString()} {currency} <b>(Pay at the hotel)</b>
                  </Typography.Body2>
                ),
              },
              {
                name: 'mealsIncluded',
                title: 'Breakfast',
                renderContent: ({ mealsIncluded }) => (
                  <Typography.Body2 color={mealsIncluded ? 'green' : 'red'}>{mealsIncluded ? 'O' : 'X'}</Typography.Body2>
                ),
              },
              {
                name: 'benefit',
                title: 'Benefits',
              },
              {
                name: 'description',
                title: 'Description',
                renderContent: ({ description }) => description.map((desc, index) => <p key={index}>{desc}</p>),
              },
            ]}
          />
          <Flex.Vertical>
            <Title>Cancellation Policy</Title>
            <Flex.Vertical gap={8}>
              {rules.cancelPenalty.map((penalty, index) => (
                <Detail
                  key={index}
                  data={penalty}
                  options={[
                    {
                      name: 'deadline',
                      title: 'Deadline',
                      renderContent: ({ deadline }) =>
                        `${deadline.start} ~ ${deadline.end ? `${deadline.end}${deadline.time ? ` ${deadline.time}` : ''}` : ''}`,
                    },
                    {
                      name: 'description',
                      title: 'Description',
                    },
                    {
                      name: 'refundable',
                      title: 'Refundable',
                      renderContent: ({ refundable }) =>
                        refundable ? <span className='tw-text-green-700'>O</span> : <span className='tw-text-red-700'>X</span>,
                    },
                    {
                      name: 'hotelPenalty',
                      title: 'Hotel Penalty',
                      renderContent: ({ hotelPenalty }) => `${hotelPenalty.percent} ${hotelPenalty.appliesTo}`,
                      hidden: !penalty.refundable && !penalty.hotelPenalty.appliesTo && !penalty.hotelPenalty.percent,
                    },
                  ]}
                />
              ))}
            </Flex.Vertical>
          </Flex.Vertical>
          <ReservationConfirmSection rules={rules} />
        </Flex.Vertical>
      </StyledReservationFormContent>
    </Form>
  );
}

export default ReservationFormContent;
