import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

import { DatePickerProps } from '@@components/DatePicker/types';

function DatePicker({ label, value, onChange, format = 'YYYY.MM.DD' }: DatePickerProps) {
  const handleChange = (date: Dayjs | null) => {
    onChange(date ? date.toDate() : undefined);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker label={label} value={value ? dayjs(value) : undefined} format={format} onChange={handleChange} />
    </LocalizationProvider>
  );
}

export default DatePicker;
