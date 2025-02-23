export type DatePickerProps = {
  label: string;
  value?: string | Date;
  onChange: (date: Date | undefined) => void;
  format?: string;
  disabled?: boolean;
};
