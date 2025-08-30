import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { showErrorToast } from '@@components/Toast';
import { PATH } from '@@constants/path';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  confirmReservationFailure,
  confirmReservationRequest,
  // confirmReservationSuccess,
  fetchHotelRulesFailure,
  fetchHotelRulesRequest,
  fetchHotelRulesSuccess,
} from '@@stores/book/reducer';
import { HotelRulesResponse, ReservationRequest, Room, RoomSearchRequest } from '@@stores/book/types';

import ReservationFormContent from './parts/ReservationFormContent';

function Reservation() {
  const dispatch = useDispatch();
  const room = useLocation().state?.room as Room;
  const searchInfo = useLocation().state?.searchInfo as RoomSearchRequest;
  const [rules, setRules] = useState<HotelRulesResponse | null>(null);

  const handleSubmit = (form: ReservationRequest) => {
    dispatch(confirmReservationRequest(form));
  };

  useEffect(() => {
    if (room) {
      dispatch(fetchHotelRulesRequest(room.rateKey));
    }
  }, [room, dispatch]);

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

  // useActionSubscribe({
  //   type: confirmReservationSuccess.type,
  //   callback: ({ payload }: ReturnType<typeof confirmReservationSuccess>) => {
  //   },
  // });

  if (!room) {
    return <Navigate to={PATH.BOOK} replace />;
  }

  if (!rules) {
    return 'Loading...';
  }

  const initialValues: ReservationRequest = {
    hotelInfo: {
      bookingCode: rules.bookingCode,
      roomQuantity: 1,
      guests: searchInfo.adultCount + searchInfo.childCount,
      hotelPropertyCode: searchInfo.propertyCode,
      hotelChainCode: searchInfo.chainCode,
      checkin: rules.checkInDate,
      checkout: rules.checkOutDate,
    },
    paymentCardInfo: {
      cardExpireDate: '',
      cardType: '',
      cardCode: '',
      cardHolderName: '',
      cardNumber: '',
      cardSeriesCode: '',
      cardTelephoneCountryAccessCode: '',
      cardTelephoneAreaCityCode: '',
      cardTelephoneCityCode: '',
    },
    travelerInfo: {
      travelerFirstName: '',
      travelerLastName: '',
      travelerPhoneNumber: '',
      travelerEmail: '',
      travelerCountryAccessCode: '',
      travelerLocalCityCode: '',
      travelerCityCode: '',
    },
    addressInfo: {
      addressNumberValue: '',
      addressStreet: '',
      addressLine: '',
      addressCity: '',
      addressCounty: '',
      addressStateProvValue: '',
      addressStateProvName: '',
      addressCountryValue: '',
      addressCountryId: '',
      addressCountryName: '',
      addressCountryCodeContext: '',
      addressPostalCode: '',
    },
    priceInfo: {
      priceCurrencyCode: rules.currency,
      totalPrice: rules.price,
      paymentCurrencyCode: rules.currency,
      paymentAmount: rules.price,
      rateCodeValue: 'rateCodeValue',
      rateCodeName: 'rateCodeName',
      rateCodeId: 'rateCodeId',
    },
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ReservationFormContent room={room} rules={rules} />
    </Formik>
  );
}

export default Reservation;
