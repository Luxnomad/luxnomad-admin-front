import { ReactNode } from 'react';

import { SelectProps } from '@mui/material';

export type DropdownProps<Value = unknown> = SelectProps<Value> & {
  options: DropdownOption<Value>[];
  helperText?: string;
};

export interface DropdownOption<Value = unknown> {
  value: Value;
  label: ReactNode;
  disabled?: boolean;
}
