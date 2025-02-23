import { TextField as MUITextField, TextFieldProps } from '@mui/material';

function TextField(props: TextFieldProps) {
  return <MUITextField fullWidth {...props} />;
}

export default TextField;
