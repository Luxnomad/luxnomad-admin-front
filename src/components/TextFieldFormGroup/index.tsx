import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import TextField from '@@components/TextField';
import { TextFieldFormGroupProps } from '@@components/TextFieldFormGroup/types';

function TextFieldFormGroup({ id, label, errorMessage, textFieldProps }: TextFieldFormGroupProps) {
  return (
    <FormGroup id={id} label={label}>
      <Flex.Horizontal flex={3}>
        <TextField id={id} {...textFieldProps} error={!!errorMessage} helperText={errorMessage} />
      </Flex.Horizontal>
    </FormGroup>
  );
}

export default TextFieldFormGroup;
