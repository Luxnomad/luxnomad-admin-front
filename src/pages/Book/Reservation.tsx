import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { showErrorToast } from '@@components/Toast';
import { PATH } from '@@constants/path';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { fetchHotelRulesFailure, fetchHotelRulesRequest, fetchHotelRulesSuccess } from '@@stores/book/reducer';
import { HotelRulesResponse, Room } from '@@stores/book/types';

import ReservationFormContent from './parts/ReservationFormContent';

function Reservation() {
  const dispatch = useDispatch();
  const room = useLocation().state?.room as Room;
  const [rules, setRules] = useState<HotelRulesResponse | null>(null);

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

  if (!room) {
    return <Navigate to={PATH.BOOK} replace />;
  }

  if (!rules) {
    return 'Loading...';
  }

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <ReservationFormContent room={room} rules={rules} />
    </Formik>
  );
}

export default Reservation;
