import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends MuiRadioGroupProps {
  label?: string;
  options: RadioOption[];
  row?: boolean;
}
