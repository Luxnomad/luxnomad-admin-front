import { useDispatch } from 'react-redux';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { showErrorToast, showSuccessToast } from '@@components/Toast';
import Typography from '@@components/Typography';
import { useRequestFlag } from '@@hooks/flag';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { useRetrieveDetail } from '@@stores/retrieve/hooks';
import { cancelRetrieveFailure, cancelRetrieveRequest, cancelRetrieveSuccess } from '@@stores/retrieve/reducer';

function BookHistoryDetailHeaderContent({ handleSave }: { handleSave: () => void }) {
  const dispatch = useDispatch();

  const loading = useRequestFlag(cancelRetrieveRequest.type);
  const { data, mutate } = useRetrieveDetail();

  const handleClickCancel = () => {
    if (data && window.confirm(`Are you sure you want cancel this booking? (This action cannot be undone)`)) {
      dispatch(
        cancelRetrieveRequest({
          confirmationNumber: data?.confirmationNumber,
          bookingIdentifier: data?.reservationId,
        })
      );
    }
  };

  useActionSubscribe({
    type: cancelRetrieveSuccess.type,
    callback: () => {
      showSuccessToast('Cancel Successfully');
      mutate();
    },
  });

  useActionSubscribe({
    type: cancelRetrieveFailure.type,
    callback: ({ payload }: ReturnType<typeof cancelRetrieveFailure>) => {
      showErrorToast(payload);
    },
  });

  return (
    <Flex.Horizontal className='tw-w-full tw-py-[4px]' justifyContent='space-between' alignItems='center'>
      <Typography.Body3>Book Detail</Typography.Body3>
      <Flex.Horizontal gap={12}>
        <Button.Medium onClick={handleSave}>Save as PDF</Button.Medium>
        {!data?.canceled && (
          <Button.Medium theme='error' onClick={handleClickCancel} loading={loading}>
            Cancel
          </Button.Medium>
        )}
      </Flex.Horizontal>
    </Flex.Horizontal>
  );
}

export default BookHistoryDetailHeaderContent;
