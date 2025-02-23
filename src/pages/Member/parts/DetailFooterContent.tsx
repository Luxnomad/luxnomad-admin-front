import Button from '@@components/Button';
import ButtonContainer from '@@components/ButtonContainer';
import CheckPermission from '@@components/CheckPermission';
import { USER_PERMISSION } from '@@constants/permissions';
import { DetailFooterContentProps } from '@@pages/Member/types';

function DetailFooterContent({ isEdit, onEdit, onCancel }: DetailFooterContentProps) {
  return (
    <ButtonContainer>
      <CheckPermission permission={USER_PERMISSION.UPDATE}>
        {!isEdit && <Button onClick={onEdit}>수정</Button>}
        {isEdit && <Button onClick={onCancel}>취소</Button>}
        {isEdit && <Button type='submit'>저장</Button>}
      </CheckPermission>
    </ButtonContainer>
  );
}

export default DetailFooterContent;
