import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { showErrorToast, showSuccessToast } from '@@components/Toast';
import { PATH } from '@@constants/path';
import { PAGES } from '@@constants/permissions';
import { reservationSchema } from '@@constants/schema';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  confirmReservationFailure,
  confirmReservationRequest,
  confirmReservationSuccess,
  // confirmReservationSuccess,
  fetchHotelRulesFailure,
  fetchHotelRulesRequest,
  fetchHotelRulesSuccess,
} from '@@stores/book/reducer';
import { HotelRulesResponse, RateInfo, ReservationRequest, Room, RoomSearchRequest } from '@@stores/book/types';

import ReservationFormContent from './parts/ReservationFormContent';
import { sanitizeReservationForm } from './utils';

const getChildArray = (ages: number[]) => {
  const newAges = ages.map((age) => +age);

  const result = Object.entries(
    newAges.reduce(
      (acc, age) => {
        acc[age] = (acc[age] || 0) + 1;
        return acc;
      },
      {} as Record<number, number>
    )
  ).map(([age, count]) => ({
    age: Number(age),
    count,
  }));

  return result;
};

function Reservation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const room = useLocation().state?.room as Room;
  const rate = useLocation().state?.rate as RateInfo;
  const searchInfo = useLocation().state?.searchInfo as RoomSearchRequest;

  const [rules, setRules] = useState<HotelRulesResponse | null>(null);

  const childrenInfo = getChildArray(searchInfo.childrenAges ?? []);

  const handleSubmit = (form: ReservationRequest) => {
    if (
      window.confirm(`Please check your reservation again.
      Hotel Name: ${rules?.hotelName}
      Check In: ${form.hotelInfo.checkin}
      Check Out: ${form.hotelInfo.checkout}
      Adult Count: ${form.hotelInfo.adultGuestCount}
      Child Count: ${childrenInfo.map((child) => `${child.age}Age * ${child.count}`).join(', ')}`)
    ) {
      dispatch(confirmReservationRequest(sanitizeReservationForm(form)));
    }
  };

  useEffect(() => {
    if (rate) {
      dispatch(fetchHotelRulesRequest(rate.rateKey));
    }
  }, [rate, dispatch]);

  useActionSubscribe({
    type: fetchHotelRulesFailure.type,
    callback: ({ payload }: ReturnType<typeof fetchHotelRulesFailure>) => {
      showErrorToast(payload);
    },
  });

  useActionSubscribe({
    type: fetchHotelRulesSuccess.type,
    callback: ({ payload }: ReturnType<typeof fetchHotelRulesSuccess>) => {
      setRules(payload);
    },
  });

  useActionSubscribe({
    type: confirmReservationFailure.type,
    callback: ({ payload }: ReturnType<typeof confirmReservationFailure>) => {
      showErrorToast(payload);
    },
  });

  useActionSubscribe({
    type: confirmReservationSuccess.type,
    callback: () => {
      showSuccessToast('Request Reservation Successfully');
      navigate(PAGES.BOOK_HISTORY);
    },
  });

  if (!rate) {
    return <Navigate to={PATH.BOOK} replace />;
  }

  if (!rules) {
    return 'Loading...';
  }

  const deadline = rules.cancelPenalty.find((v) => !!v.deadline.end)?.deadline;

  const initialValues: ReservationRequest = {
    hotelInfo: {
      bookingCode: rules.bookingCode,
      roomQuantity: 1,
      adultGuestCount: searchInfo.adultCount,
      children: childrenInfo,
      hotelPropertyCode: searchInfo.propertyCode,
      hotelChainCode: searchInfo.chainCode,
      checkin: rules.checkInDate,
      checkout: rules.checkOutDate,
    },
    priceInfo: {
      priceCurrencyCode: rules.currency,
      totalPrice: rules.price,
      paymentCurrencyCode: rules.currency,
      paymentAmount: rules.price,
      rateCodeValue: rate.rateCode,
      rateCodeName: 'V',
      rateCodeId: 'STEPPROGRAM',
    },
    paymentCardInfo: {
      cardExpireDate: '',
      cardType: 'Credit',
      cardCode: rules.acceptedCreditCard[0].value,
      cardHolderName: '',
      cardNumber: '',
      cardSeriesCode: '000', // 고정
      cardTelephoneCountryAccessCode: '0', // 고정
      cardTelephoneAreaCityCode: '0', // 고정
      cardTelephoneCityCode: 'A', // 고정
    },
    travelerInfo: {
      travelerFirstName: '',
      travelerLastName: '',
      travelerPhoneNumber: '',
      travelerEmail: 'proj.luxnomad@gmail.com', // 고정
      travelerCountryAccessCode: '886',
      travelerLocalCityCode: '2', // 고정
      travelerCityCode: 'TPE', // 고정
    },
    addressInfo: {
      // 고정 값
      addressNumberValue: '6F',
      addressStreet: 'No. 309, Zhuangjing Rd.',
      addressLine: '6F, No. 309, Zhuangjing Rd.',
      addressCity: 'Taipei',
      addressCounty: '886',
      addressStateProvValue: '2',
      addressStateProvName: 'Taipei',
      addressCountryValue: 'TW',
      addressCountryId: 'country_886',
      addressCountryName: 'Taiwan',
      addressCountryCodeContext: 'Example String Value',
      addressPostalCode: 'n/a',
    },
    requestComment: '',
    cancelDeadline: deadline ? `${deadline.end}T${deadline.time ?? '23:59:59'}` : '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={reservationSchema}>
      <ReservationFormContent room={room} rules={rules} rate={rate} />
    </Formik>
  );
}

export default Reservation;
