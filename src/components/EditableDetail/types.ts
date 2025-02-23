import { ReactNode } from 'react';

import { DetailOption, DetailProps } from '@@components/Detail/types';

export interface EditableDetailOption<Data extends object> extends DetailOption<Data> {
  renderInputContent?: ((data: Data) => ReactNode) | ReactNode;
  isEditable?: boolean;
}

export interface EditableDetailProps<Data extends object> extends DetailProps<Data> {
  isEdit?: boolean;
  options: EditableDetailOption<Data>[];
}
