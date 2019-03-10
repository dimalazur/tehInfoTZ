import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects';
import {
  GET_HOUSE_MAP_REQUEST,
  GET_HOUSE_MAP_SUCCESS,
  GET_HOUSE_MAP_FAILURE,
} from '../actions/actions';
import { authApi } from '../API';



function* getHouseMap(actions) {
  const success = payload => ({ type: GET_HOUSE_MAP_SUCCESS, payload });
  const failure = payload => ({ type: GET_HOUSE_MAP_FAILURE, payload });

  try {
    const res = yield call(authApi.getHouseMap);
    console.log(res);
    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}


function* notesSaga() {
  yield takeEvery(GET_HOUSE_MAP_REQUEST, getHouseMap);
}

export default notesSaga;