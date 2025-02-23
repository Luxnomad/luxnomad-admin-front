import { useNavigate, useParams } from 'react-router-dom';

import Button from '@@components/Button';
import ButtonContainer from '@@components/ButtonContainer';
import CheckPermission from '@@components/CheckPermission';
import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';

function DetailFooterContent() {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleClickUpdate = () => {
    navigate(`${PATH.PLATFORM}/update/${id}`);
  };

  return (
    <ButtonContainer>
      <CheckPermission permission={USER_PERMISSION.UPDATE}>
        <Button onClick={handleClickUpdate}>수정</Button>
      </CheckPermission>
    </ButtonContainer>
  );
}

export default DetailFooterContent;
