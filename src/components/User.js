import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const User = function({user}){
  return(<TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.full_name}
                    </TableCell>
                    <TableCell align="right">{user.country}</TableCell>
                    <TableCell align="right">{user.date_birth}</TableCell>
                  </TableRow>)
}
/*User.propTypes = {
  price: PropTypes.number.isRequired
};*/
export default User;