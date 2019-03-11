import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TableHeader = function() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Country</TableCell>
        <TableCell align="right">Date of birth</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeader;