import { ReactNode } from 'react';

/*
size는 최대 12를 기준
 */
export interface DetailOption<Data extends object> {
  name: keyof Data | string;
  title?: ReactNode;
  renderContent?: ((data: Data) => ReactNode) | ReactNode | DetailOption<Data>[];
  hidden?: boolean;
  size?: number;
  single?: boolean;
  required?: boolean;
}

export interface DetailProps<Data extends object> {
  title?: ReactNode;
  data: Data;
  options: DetailOption<Data>[];
  headerContent?: ReactNode;
}

export interface DetailRowProps<Data extends object> {
  option: DetailOption<Data>;
  data: Data;
}
