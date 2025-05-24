import { DatePickerProps as MUIDatePickerProps, PickerValidDate } from '@mui/x-date-pickers';

export type DatePickerProps = Omit<MUIDatePickerProps<PickerValidDate, false>, 'value'> & {
  label: string;
  value?: string | Date;
  onChange: (date: Date | undefined) => void;
  format?: string;
  disabled?: boolean;
};
