import { PropsWithChildren, ReactNode } from 'react';

export type FormGroupProps = PropsWithChildren<{
  id?: string;
  label?: ReactNode;
}>;
