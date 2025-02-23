import { SyntheticEvent } from 'react';

import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { useFormikContext } from 'formik';
import { ErrorMessage } from 'formik';

import Flex from '@@components/Flex';
import { ALL_USER_PERMISSION, USER_PERMISSION, USER_PERMISSION_STRING } from '@@constants/permissions';
import { UpsertAdminForm } from '@@pages/Admin/types';
import { UserPermission } from '@@types/permissions';

function AdminPermissionsInput() {
  const { values, setFieldValue, setFieldTouched } = useFormikContext<UpsertAdminForm>();

  const handleChangeCheck = (permission: UserPermission) => (_: SyntheticEvent, checked: boolean) => {
    setFieldTouched('permission', true);

    if (permission === USER_PERMISSION.SUPER_ADMIN) {
      setFieldValue('permission', checked ? [USER_PERMISSION.SUPER_ADMIN] : []);
    } else {
      setFieldValue(
        'permission',
        checked
          ? [...values.permission, permission].filter((p) => p !== USER_PERMISSION.SUPER_ADMIN)
          : values.permission.filter((p) => p !== permission)
      );
    }
  };

  const isCheckedSuperAdmin = values.permission.includes(USER_PERMISSION.SUPER_ADMIN);

  return (
    <Flex.Vertical>
      <Flex.Horizontal>
        {ALL_USER_PERMISSION.filter((permission) => permission !== USER_PERMISSION.SUPER_ADMIN).map((permission) => (
          <FormControlLabel
            key={permission}
            control={<Checkbox />}
            value={USER_PERMISSION_STRING}
            label={USER_PERMISSION_STRING[permission]}
            onChange={handleChangeCheck(permission)}
            disabled={isCheckedSuperAdmin}
            checked={isCheckedSuperAdmin || values.permission.includes(permission)}
          />
        ))}
      </Flex.Horizontal>
      <Flex.Horizontal>
        <FormControlLabel
          control={<Checkbox />}
          value={USER_PERMISSION.SUPER_ADMIN}
          label={USER_PERMISSION_STRING[USER_PERMISSION.SUPER_ADMIN]}
          onChange={handleChangeCheck(USER_PERMISSION.SUPER_ADMIN)}
          checked={isCheckedSuperAdmin}
        />
      </Flex.Horizontal>
      <ErrorMessage component={(props) => <FormHelperText {...props} error />} name='permission' />
    </Flex.Vertical>
  );
}

export default AdminPermissionsInput;
