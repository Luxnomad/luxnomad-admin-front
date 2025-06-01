import { Autocomplete, CircularProgress, TextField } from '@mui/material';

import { useSuggestion } from '@@components/Suggestion/hooks';
import { SuggestionProps } from '@@components/Suggestion/types';
// import TextField from '@@components/TextField';

function Suggestion<T>({ fetcher, onChange, getOptionLabel, fullWidth, textFieldProps }: SuggestionProps<T>) {
  const { inputValue, setInputValue, options, loading } = useSuggestion<T>(fetcher);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => getOptionLabel(option as T)}
      filterOptions={(x) => x}
      inputValue={inputValue}
      onInputChange={(_, value) => setInputValue(value)}
      fullWidth={fullWidth}
      onChange={(_, value) => {
        onChange?.(value ? (value as T) : ('' as T));
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          {...textFieldProps}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: <>{loading && <CircularProgress color='inherit' size={20} />}</>,
            },
          }}
        />
      )}
    />
  );
}

export default Suggestion;
