import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const User = function({user}){
	return(
  		<TableRow key={user.id}>
	    	<TableCell component="th" scope="row">
	      		{user.fullName}
	    	</TableCell>
	    	<TableCell align="right">{user.country}</TableCell>
	    	<TableCell align="right">{user.dateOfBirth}</TableCell>
	  	</TableRow>
    )
}
User.propTypes = {
  user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired
    }).isRequired

};
export default User;