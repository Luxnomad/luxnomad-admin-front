import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

import { DropdownProps } from '@@components/Dropdown/types';

function Dropdown<Value = unknown>({ label, options, helperText, ...props }: DropdownProps<Value>) {
  return (
    <FormControl fullWidth>
      {label && <InputLabel shrink={!!props.displayEmpty}>{label}</InputLabel>}
      <Select {...props} label={label}>
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
