import { ReactNode } from 'react';

import { TableCell } from '@mui/material';

import { TableColumn } from '@@components/Table/types';

function TableBodyCell<Data extends object>({ column, row, index }: { column: TableColumn<Data>; row: Data; index: number }) {
  const { width, name, renderContent } = column;

  const renderedContent = typeof renderContent === 'function' ? renderContent(row, index) : renderContent;

  return <TableCell width={width}>{renderedContent ?? (row[name as keyof Data] as ReactNode)}</TableCell>;
}

export default TableBodyCell;
