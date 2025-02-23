import styled from '@emotion/styled';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@mui/material';

import { RadioGroupProps } from '@@components/RadioGroup/types';

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  .MuiFormLabel-root {
    min-width: fit-content;
  }
`;

function RadioGroup({ label, options, value, onChange, row = true }: RadioGroupProps) {
  return (
    <StyledFormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <MuiRadioGroup row={row} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio size='small' />}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </MuiRadioGroup>
    </StyledFormControl>
  );
}

export default RadioGroup;
