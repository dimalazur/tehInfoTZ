import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import ReactPaginate from 'react-paginate';
import User from '../components/User';
import FilterPanel from '../components/FilterPanel';
import TableHeader from '../components/TableHeader';
import { getUserListRequest, userFilter, changeUserPage } from '../actions/actions';


class FilterUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullName:'',
      country:'',
      dateOfBirth:''
    }
    this.changeHeandler = this.changeHeandler.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount(){
    const {onGetUserListRequest} = this.props;
    onGetUserListRequest();
  }

  getData() {
    const { fullName, country, dateOfBirth } = this.state;
    const { userList } = this.props;

    if (fullName || country || dateOfBirth) {
      return userList.filter(user => {
        return ((fullName === '') || user.fullName.toLowerCase().includes(fullName.toLowerCase()))
          && ((country === '') || user.country.toLowerCase().includes(country.toLowerCase()))
          && ((dateOfBirth === '') || user.dateOfBirth.toLowerCase().includes(dateOfBirth.toLowerCase()))
      })
    }
    return userList;
  }

  changeHeandler({ target: {name,value} }) {
    const {onUserFilter} = this.props;

    this.setState(      
      {[name]: value},
      () => {
        onUserFilter(this.getData());
      }  
    );  
  };

  handlePageClick(data) {
    const {onChangeUserPage, pageRange} = this.props;
    const selected = data.selected;
    const offset = Math.ceil(selected * pageRange);
   
    onChangeUserPage({offset, users: this.getData()});
  };
  
   
  render() {
    const {userRenderList, pageCount, pageRange } = this.props;

    return (
        <div className="filter-user-holder">
          <div className="wrap">
            <FilterPanel onChangeHeandler={this.changeHeandler} />
            <Paper className="table-holder">
              <Table className="table">
                <TableHeader />
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
              pageRangeDisplayed={pageRange}
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
   userRenderList: state.users.userRenderList,
   pageCount: state.users.pageCount,
   pageRange: state.users.pageRange
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


FilterUser.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired
  })).isRequired,
  userRenderList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired
  })),
  pageCount: PropTypes.number.isRequired,
  pageRange: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterUser);