import { useParams } from 'react-router-dom';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { showSuccessToast } from '@@components/Toast';
import Typography from '@@components/Typography';

function BookHistoryDetailHeaderContent() {
  const { id } = useParams();

  const handleClickCancel = () => {
    if (window.confirm(`Are you sure cancel ${id} Book?`)) {
      showSuccessToast('Cancel Successfully');
    }
  };

  return (
    <Flex.Horizontal className='tw-w-full tw-py-[4px]' justifyContent='space-between' alignItems='center'>
      <Typography.Body3>Book Detail</Typography.Body3>
      <Button size='small' color='error' onClick={handleClickCancel}>
        Cancel
      </Button>
    </Flex.Horizontal>
  );
}

export default BookHistoryDetailHeaderContent;
