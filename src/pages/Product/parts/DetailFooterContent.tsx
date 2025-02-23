import { useNavigate, useParams } from 'react-router-dom';

import Button from '@@components/Button';
import ButtonContainer from '@@components/ButtonContainer';
import CheckPermission from '@@components/CheckPermission';
import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';
import { DetailFooterContentProps } from '@@pages/Product/types';

function DetailFooterContent({ isEdit, onCancel }: DetailFooterContentProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickUpdate = () => {
    navigate(`${PATH.PRODUCT}/update/${id}`);
  };

  return (
    <ButtonContainer>
      <CheckPermission permission={USER_PERMISSION.UPDATE}>
        {!isEdit && <Button onClick={handleClickUpdate}>수정</Button>}
        {isEdit && <Button onClick={onCancel}>취소</Button>}
        {isEdit && <Button type='submit'>저장</Button>}
      </CheckPermission>
    </ButtonContainer>
  );
}

export default DetailFooterContent;
