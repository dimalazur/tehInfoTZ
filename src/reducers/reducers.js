import { combineReducers } from 'redux';
import {
  GET_USER_LIST_SUCCESS,
  CHANGE_CARD_TEMPLATE,
  USER_FILTER,
  CHANGE_USER_PAGE
} from '../actions/actions';

const initialState = {
  userList: [],
  searchTerm: null,
  userRenderList: [],
  userIndexRender: 5,
  pageRange: 5,
  pageCount: 0
}

function users (state = initialState, action)  {
  switch (action.type) {

    case GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        userList: [...action.payload],
        userRenderList: [...action.payload.slice(0,5)],
        pageCount: action.payload.length / state.pageRange
      }
    }
    case USER_FILTER: {
      return {
        ...state,
        userRenderList: [...action.payload.slice(0,5)],
        pageCount: action.payload.length / state.pageRange
      }
    }
    case CHANGE_USER_PAGE: {
      console.log('CHANGE_USER_PAGE');
      console.log([...action.payload.users]);

      return {
        ...state,
        userRenderList: [...action.payload.users.slice(action.payload.offset, action.payload.offset+5)]
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