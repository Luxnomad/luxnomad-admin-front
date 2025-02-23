import { ReactNode } from 'react';

export interface DetailOption<Data extends object> {
  name: keyof Data | string;
  title?: ReactNode;
  renderContent?: ((data: Data) => ReactNode) | ReactNode;
}

export interface DetailProps<Data extends object> {
  title?: ReactNode;
  data: Data;
  options: DetailOption<Data>[];
}
