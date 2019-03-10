import { combineReducers } from 'redux';
import {
  GET_HOUSE_MAP_SUCCESS,
  CHANGE_CARD_TEMPLATE,
  USER_FILTER
} from '../actions/actions';

const initialState = {
  userList: [],
  searchTerm: null
}

function users (state = initialState, action)  {
  switch (action.type) {

    case GET_HOUSE_MAP_SUCCESS: {
      return {
        ...state,
        userList: [...action.payload]
      }
    }
    case USER_FILTER: {
      const {full_name, country, date_birth} = action.payload;
      return {
        ...state,
        //searchTerm: state.userList.filter( (user) => filterUser(user) )
        searchTerm: state.userList.filter( (user) => {
          return ( 
            user.full_name.toLowerCase().includes(full_name.toLowerCase())  || 
            user.country.toLowerCase().includes(country.toLowerCase()) || 
            user.date_birth.toLowerCase().includes(date_birth.toLowerCase())  
          );
        })
      }
    }
    default: {
      return state;
    }
  }
};

const store = combineReducers({
  users,
})

export default store;