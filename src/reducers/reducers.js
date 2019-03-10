import { combineReducers } from 'redux';
import {
  GET_USER_LIST_SUCCESS,
  CHANGE_CARD_TEMPLATE,
  USER_FILTER
} from '../actions/actions';

const initialState = {
  userList: [],
  searchTerm: null
}

function users (state = initialState, action)  {
  switch (action.type) {

    case GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        userList: [...action.payload]
      }
    }
    case USER_FILTER: {
      console.log(state);
      return {
        ...state,
        searchTerm: [...action.payload]
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