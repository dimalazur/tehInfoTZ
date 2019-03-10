export const GET_USER_LIST_REQUEST = 'GET_USER_LIST_REQUEST';
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
export const GET_USER_LIST_FAILURE = 'GET_USER_LIST_FAILURE';
export const USER_FILTER = 'USER_FILTER';

export const getUserListRequest = payload => ({
  type: GET_USER_LIST_REQUEST,
  payload,
});

export const getUserListSuccess = payload => ({
  type: GET_USER_LIST_SUCCESS,
  payload,
});

export const getUserListFailure = payload => ({
  type: GET_USER_LIST_FAILURE,
  payload,
});

export const userFilter = payload => ({
  type: USER_FILTER,
  payload,
});
