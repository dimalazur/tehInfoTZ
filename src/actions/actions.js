export const GET_HOUSE_MAP_REQUEST = 'GET_HOUSE_MAP_REQUEST';
export const GET_HOUSE_MAP_SUCCESS = 'GET_HOUSE_MAP_SUCCESS';
export const GET_HOUSE_MAP_FAILURE = 'GET_HOUSE_MAP_FAILURE';
export const CHANGE_CARD_TEMPLATE = 'CHANGE_CARD_TEMPLATE';
export const USER_FILTER = 'USER_FILTER';

export const getHouseMapRequest = payload => ({
  type: GET_HOUSE_MAP_REQUEST,
  payload,
});

export const getHouseMapSuccess = payload => ({
  type: GET_HOUSE_MAP_SUCCESS,
  payload,
});

export const getHouseMapFailure = payload => ({
  type: GET_HOUSE_MAP_FAILURE,
  payload,
});

export const changeCardTemplate = payload => ({
  type: CHANGE_CARD_TEMPLATE,
  payload,
});

export const userFilter = payload => ({
  type: USER_FILTER,
  payload,
});
