import { TextFieldProps } from '@mui/material';

export interface SuggestionProps<T> {
  fetcher: (keyword: string) => Promise<T[]>;
  onChange?: (value: T) => void;
  getOptionLabel: (option: T) => string;
  textFieldProps?: TextFieldProps;
  fullWidth?: boolean;
  defaultValue?: T;
}
