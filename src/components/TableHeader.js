import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TableHeader = function() {
  return (
    <TableHead>
      <TableRow>
        <TableCell className="table-head-cell" >Name</TableCell>
        <TableCell align="right" className="table-head-cell" >Country</TableCell>
        <TableCell align="right" className="table-head-cell" >Date of birth</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeader;