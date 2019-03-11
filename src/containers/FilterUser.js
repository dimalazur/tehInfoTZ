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
import ReactPaginate from 'react-paginate';

import { getUserListRequest, userFilter, changeUserPage } from '../actions/actions';


class FilterUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      fullName:'',
      country:'',
      dateOfBirth:'',
      pageOfItems: [],
      filterData: null,
      dataPagination: null,
      pageCount: 5,
      perPage: 5
    }
    this.changeHeandler = this.changeHeandler.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    //this.handlePageClick = this.handlePageClick.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems });
  }

  componentDidMount(){
    const {onGetUserListRequest} = this.props;
    onGetUserListRequest();
  }

  componentWillUpdate(prevProps, prevState) {
    const {fullName, country, dateOfBirth, filterData, dataPagination} = this.state;
    const {userList} = this.props;
    if(prevState.dataPagination !== dataPagination ){
      console.log('componentWillUpdate');
      
    }

  }


  getData() {
    const { fullName, country, dateOfBirth, filterData, dataPagination } = this.state;
    const { userList } = this.props;

    if (fullName || country || dateOfBirth) {
      let data = userList.filter(user => {
        return ((fullName === '') || user.fullName.toLowerCase().includes(fullName.toLowerCase()))
          && ((country === '') || user.country.toLowerCase().includes(country.toLowerCase()))
          && ((dateOfBirth === '') || user.dateOfBirth.toLowerCase().includes(dateOfBirth.toLowerCase()))
      })
      return data;
    }
    /*if ( dataPagination !== null ) {

    }*/
    return userList;
    /* const userListData = this.getData();
    onUserFilter(userListData);*/
  }

  changeHeandler({ target: {name,value} }) {
    const {onUserFilter} = this.props;
    this.setState(      
      {[name]: value},
      () => {
        onUserFilter(this.getData());
      }  
    );  
    //console.log(this.state);
    //onUserFilter(this.getData());
  };

  handlePageClick = data => {
    const {onChangeUserPage} = this.props;
    console.log(data);
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);
    console.log(this.getData());
    let users = this.getData();

   
    onChangeUserPage({offset, users});
   

   //let newData = [...this.state.filterData].slice(offset, this.state.pageCount);
    this.setState({ offset: offset }, () => {
      this.setState({
       // dataPagination: newData,
      })
    });
    //console.log(newData);
  };
  
   
  render() {
    const { pageOfItems, dataPagination } = this.state;
    const { userRenderList, pageCount } = this.props;
    const userListrender = this.getData();

    console.log('userListrender', userListrender)
    /*const DisplayTemplate = houseMapList.map(house => (
                
            ));   */

  return (
      <div className="filter-user-holder">
        <div className="wrap">
          <div className="filter-panel">
            {/*<Input placeholder="Search name" name="fullName" type="string" className="filter-field" 
            onChange={ function() {return this.changeHeandler.bind(this)} }/>*/}
            <input
                className="filter-field"
                type="text"
                name="fullName"
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
                name="dateOfBirth"
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
                {userRenderList.map(user => (
                  <User user={user} key={user.id} />
                ))}
              </TableBody>
            </Table>
          </Paper>

          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
   userList: state.users.userList,
   searchTerm: state.users.searchTerm,
   userRenderList: state.users.userRenderList,
   pageCount: state.users.pageCount
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserListRequest: (payload) => {
      dispatch(getUserListRequest(payload))
    },
    onUserFilter: (payload) => {
      dispatch(userFilter(payload))
    },
    onChangeUserPage: (payload) => {
      dispatch(changeUserPage(payload))
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