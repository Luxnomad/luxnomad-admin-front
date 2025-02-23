import { DropdownProps } from '@@components/Dropdown/types';
import { FormGroupProps } from '@@components/FormGroup/types';

export type DropdownFormGroupProps = FormGroupProps & {
  errorMessage?: string;
  dropdownProps: DropdownProps;
};
