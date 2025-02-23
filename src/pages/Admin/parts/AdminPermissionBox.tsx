import Flex from '@@components/Flex';
import { USER_PERMISSION_STRING } from '@@constants/permissions';
import { UserPermission } from '@@types/permissions';

function AdminPermissionBox({ permissions }: { permissions: UserPermission[] }) {
  return (
    <Flex.Vertical>
      {permissions.map((permission) => (
        <p key={permission}>{USER_PERMISSION_STRING[permission]}</p>
      ))}
    </Flex.Vertical>
  );
}

export default AdminPermissionBox;
