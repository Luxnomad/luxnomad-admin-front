import { TableCell } from '@mui/material';

import { TableColumn } from '@@components/Table/types';

function TableHeadCell<Data extends object>({ column, row, index }: { column: TableColumn<Data>; row: Data; index: number }) {
  const { renderHeader, title, name, width } = column;

  const renderedHeader = typeof renderHeader === 'function' ? renderHeader?.(row, index) : renderHeader;

  return <TableCell width={width}>{renderedHeader ?? title ?? String(name)}</TableCell>;
}

export default TableHeadCell;
