import { format } from 'date-fns';
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
            title='Basic Info'
            data={rules}
            options={[
              {
                name: 'rac',
                title: 'RAC',
                renderContent: rate.rateCode,
                size: 6,
              },
              {
                name: 'partnetship',
                title: 'Partnership Name',
                renderContent: rate.partnershipName,
                size: 6,
              },
              {
                name: 'schedules',
                title: 'Schedules',
                renderContent: ({ checkInDate, checkInTime, checkOutDate, checkOutTime }) =>
                  `${checkInDate} ${checkInTime} ~ ${checkOutDate} ${checkOutTime}`,
              },
              {
                name: 'price',
                title: 'Price',
                renderContent: ({ price, currency }) => `${price.toLocaleString()} ${currency}`,
              },
              {
                name: 'mealsIncluded',
                title: 'Meals included',
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
            <Title>Penalties</Title>
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
                        `${format(deadline.start, 'yyyy.MM.dd')} ~ ${deadline.end ? format(deadline.end, 'yyyy.MM.dd') : ''}`,
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
