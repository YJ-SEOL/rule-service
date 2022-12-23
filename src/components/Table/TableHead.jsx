import React, { useState } from 'react';

const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = accessor => {
    console.log(accessor);
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          let cl = sortable;
          if (sortable) {
            if (sortField === accessor && order === 'asc') {
              cl = 'up';
            } else if (sortField === accessor && order === 'desc') {
              cl = 'down';
            } else {
              cl = 'default';
            }
          } else {
            cl = '';
          }
          return (
            <th
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
              className={cl}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
