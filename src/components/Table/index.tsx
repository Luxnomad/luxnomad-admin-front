import { Checkbox, Table as MUITable, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import TableBodyCell from '@@components/Table/parts/TableBodyCell';
import TableHeadCell from '@@components/Table/parts/TableHeadCell';
import { TableProps } from '@@components/Table/types';
import { useCheckedListContext } from '@@context/CheckedListContext/hooks';

const StyledTable = styled(Flex.Vertical)`
  .table__fallback {
    padding: 20px 10px;
  }
`;

function Table<Data extends object>({ rows, columns, fallbackContent, checkbox, idKey }: TableProps<Data>) {
  const { checkedList, setCheckedList } = useCheckedListContext<Data>();

  const filteredColumns = columns.filter(({ visible }) => visible !== false);

  const handleChangeCheck = (row: Data) => () => {
    if (!idKey) return;

    const data = checkedList.find((data) => data[idKey] === row[idKey]);
    if (data) {
      setCheckedList(checkedList.filter((data) => data[idKey] !== row[idKey]));
    } else {
      setCheckedList(checkedList.concat(row).sort((a, b) => (a[idKey] > b[idKey] ? 1 : -1)));
    }
  };

  const handleChangeCheckAll = () => {
    if (checkedList.length === rows.length) {
      setCheckedList([]);
    } else {
      setCheckedList([...rows]);
    }
  };

  return (
    <StyledTable>
      <MUITable>
        <TableHead>
          <TableRow>
            {checkbox && !!idKey && (
              <TableCell width={40}>
                <Checkbox checked={checkedList.length === rows.length} onChange={handleChangeCheckAll} />
              </TableCell>
            )}
            {filteredColumns.map((column, index) => (
              <TableHeadCell key={String(column.name)} column={column} row={rows[index]} index={index} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {checkbox && !!idKey && (
                <TableCell>
                  <Checkbox checked={!!checkedList.find((data) => data[idKey] === row[idKey])} onChange={handleChangeCheck(row)} />
                </TableCell>
              )}
              {filteredColumns.map((column) => (
                <TableBodyCell key={String(column.name)} column={column} row={row} index={rowIndex} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
      {!rows.length && fallbackContent && <div className='table__fallback'>{fallbackContent}</div>}
    </StyledTable>
  );
}

export default Table;
