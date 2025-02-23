import { PropsWithChildren, ReactNode } from 'react';

export type PageTemplateProps = PropsWithChildren<{
  headerContent?: ReactNode;
  footerContent?: ReactNode;
}>;
