import { useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import CheckPermission from '@@components/CheckPermission';
import Flex from '@@components/Flex';
import { PATH } from '@@constants/path';
import { USER_PERMISSION } from '@@constants/permissions';

function FooterContent() {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate(`${PATH.PLATFORM}/create`);
  };

  return (
    <Flex.Horizontal>
      <CheckPermission adminOnly permission={USER_PERMISSION.CREATE}>
        <Button onClick={handleClickCreate}>신규 플랫폼 생성</Button>
      </CheckPermission>
    </Flex.Horizontal>
  );
}

export default FooterContent;
