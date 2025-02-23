import { useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import ButtonContainer from '@@components/ButtonContainer';
import CheckPermission from '@@components/CheckPermission';
import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';

function FooterContent() {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate(`${PATH.PRODUCT}/create`);
  };

  return (
    <ButtonContainer>
      <CheckPermission permission={USER_PERMISSION.CREATE}>
        <Button onClick={handleClickCreate}>신규 상품 생성</Button>
      </CheckPermission>
    </ButtonContainer>
  );
}

export default FooterContent;
