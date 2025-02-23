import { ReactNode } from 'react';

export interface TableColumn<Data extends object> {
  name: keyof Data | string;
  title?: ReactNode;
  renderContent?: ((data: Data, index: number) => ReactNode) | ReactNode;
  renderHeader?: ((data: Data, index: number) => ReactNode) | ReactNode;
  width?: string;
  visible?: boolean;
}

export interface TableProps<Data extends object> {
  columns: TableColumn<Data>[];
  rows: Data[];
  fallbackContent?: ReactNode;
  checkbox?: boolean;
  idKey?: keyof Data;
}
