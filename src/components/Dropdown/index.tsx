import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

import { DropdownProps } from '@@components/Dropdown/types';

function Dropdown<Value = unknown>({ label, options, helperText, className, ...props }: DropdownProps<Value>) {
  const newClass = `tw-h-[40px] ${className}`;

  return (
    <FormControl fullWidth>
      {label && <InputLabel shrink={!!props.displayEmpty}>{label}</InputLabel>}
      <Select {...props} className={newClass} label={label}>
        {options.map(({ value, label, disabled }) => (
          <MenuItem key={String(value)} value={value as string | number | undefined} disabled={disabled}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export default Dropdown;
