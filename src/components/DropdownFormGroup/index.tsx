import Dropdown from '@@components/Dropdown';
import { DropdownFormGroupProps } from '@@components/DropdownFormGroup/types';
import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';

function DropdownFormGroup({ id, label, errorMessage, dropdownProps }: DropdownFormGroupProps) {
  return (
    <FormGroup id={id} label={label}>
      <Flex.Horizontal flex={3}>
        <Dropdown {...dropdownProps} error={!!errorMessage} helperText={errorMessage} />
      </Flex.Horizontal>
    </FormGroup>
  );
}

export default DropdownFormGroup;
