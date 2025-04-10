import { FilterGroupProps } from '@@components/FilterGroup/types';
import { TextFieldProps } from '@@components/TextField/types';

export interface TextFieldFilterGroupProps extends TextFieldProps, Omit<FilterGroupProps, 'children'> {}
