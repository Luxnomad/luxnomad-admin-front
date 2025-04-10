import { PropsWithChildren, ReactNode } from 'react';

export type FilterGroupProps = PropsWithChildren<{
  id?: string;
  label?: ReactNode;
  errorMessage?: string;
}>;
