import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

import User from '../components/User';
import Pagination from '../components/Pagination';

import { getHouseMapRequest,userFilter } from '../actions/actions';


class FilterUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      full_name:'',
      country:'',
      date_birth:'',
      pageOfItems: [],
      filterData: null
    }
    this.changeHeandler = this.changeHeandler.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  componentDidMount(){
    const {onGetHouseMapRequest} = this.props;
    onGetHouseMapRequest();
  }
  componentWillUpdate(prevProps, prevState){
    const {full_name, country, date_birth, filterData} = this.state;
    const {userList} = this.props;
   // const data = (filterData.length > 0 ) ? filterData : userList;
   
    if(prevState.full_name !== full_name || prevState.country !== country || prevState.date_birth !== date_birth){
      console.log('filter');
      const filterData = userList.filter( user => ( ((full_name === '') || user.full_name.toLowerCase().includes(full_name.toLowerCase())) ) )
      this.setState({filterData});
    }


    /*if(prevState.full_name !== full_name){
      const filterData = data.filter( user => ( user.full_name.toLowerCase().includes(full_name.toLowerCase()) ) )
      this.setState({filterData});
    }
    if(prevState.country !== country){
      const filterData = data.filter( user => ( user.country.toLowerCase().includes(country.toLowerCase()) ) )
      this.setState({filterData});
    }
    if(prevState.date_birth !== date_birth){
      const filterData = data.filter( user => ( user.date_birth.toLowerCase().includes(date_birth.toLowerCase()) ) )
      this.setState({filterData});
    }*/

  }

  changeHeandler({ target: {name,value} }) {
    const {onUserFilter} = this.props;
    console.log('onUserFilter');
    this.setState(      
      {[name]: value}  
    );
   

   /* let myObj ={
      ...this.state
    }

    myObj[name]= value;*/
   
   // onUserFilter(myObj);
   

  };
  
   
  render() {
    const {userList, onChangeCardTemplate,searchTerm} = this.props;
    const { filterData } = this.state;
   // let userListrender = (searchTerm === null) ? userList : searchTerm;
    let userListrender = (filterData !== null ) ? filterData : userList;
    
    /*const DisplayTemplate = houseMapList.map(house => (
                
            ));   */
          

  return (
      <div className="filter-user-holder">
        <div className="wrap">
          <div className="filter-panel">
            {/*<Input placeholder="Search name" name="full_name" type="string" className="filter-field" 
            onChange={ function() {return this.changeHeandler.bind(this)} }/>*/}
            <input
                className="filter-field"
                type="text"
                name="full_name"
                placeholder="Search name"
                onChange={this.changeHeandler}
              />
            <input
                className="filter-field"
                type="text"
                name="country"
                placeholder="Search country"
                onChange={this.changeHeandler}
              />
            <input
                className="filter-field"
                type="text"
                name="date_birth"
                placeholder="Search date of birth"
                onChange={this.changeHeandler}
              />
          </div>
          <Paper className="table-holder">
            <Table className="table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell align="right">Date of birth</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.pageOfItems.map(user => (
                  <User user={user} key={user.id} />
                ))}
              </TableBody>
            </Table>
          </Paper>

          <Pagination items={userListrender} onChangePage={this.onChangePage} />

        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
   userList: state.users.userList,
   searchTerm: state.users.searchTerm
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetHouseMapRequest: (payload) => {
      dispatch(getHouseMapRequest(payload))
    },
    onUserFilter: (payload) => {
      dispatch(userFilter(payload))
    }
  }
}

/*FilterUser.propTypes = {
  houseMapList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      area: PropTypes.number,
      full_address: PropTypes.string.isRequired,
      price: PropTypes.number.isRewuired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string,
      rating: PropTypes.number,
    })).isRequired,
  templateName: PropTypes.string.isRequired,
  onGetHouseMapRequest: PropTypes.func.isRequired,
  onChangeCardTemplate: PropTypes.func.isRequired,
};*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterUser);