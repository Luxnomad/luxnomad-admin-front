import { TextFieldProps } from '@mui/material';

import { FormGroupProps } from '@@components/FormGroup/types';

export type TextFieldFormGroupProps = FormGroupProps & {
  errorMessage?: string;
  textFieldProps: TextFieldProps;
};
