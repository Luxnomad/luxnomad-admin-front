import FilterGroup from '@@components/FilterGroup';
import TextField from '@@components/TextField';
import { TextFieldFilterGroupProps } from '@@components/TextFieldFilterGroup/types';

function TextFieldFilterGroup({ id, label, errorMessage, ...textFieldProps }: TextFieldFilterGroupProps) {
  return (
    <FilterGroup id={id} label={label} errorMessage={errorMessage}>
      <TextField id={id} {...textFieldProps} />
    </FilterGroup>
  );
}

export default TextFieldFilterGroup;
