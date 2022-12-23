import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import useSortableTable from '../../common/hooks/useSortableTable';

const Table = ({ columns, data }) => {
  const [tableData, handleSorting] = useSortableTable(data);

  return (
    <table className='table'>
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};

export default Table;
