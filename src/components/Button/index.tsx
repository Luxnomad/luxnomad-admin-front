import { ButtonProps, Button as MUIButton } from '@mui/material';

function Button(props: ButtonProps) {
  return <MUIButton {...props} style={{ textTransform: 'none' }} variant='contained' />;
}

export default Button;
