import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects';
import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
} from '../actions/actions';
import { authApi } from '../API';



function* getUserList(actions) {
  const success = payload => ({ type: GET_USER_LIST_SUCCESS, payload });
  const failure = payload => ({ type: GET_USER_LIST_FAILURE, payload });

  try {
    const res = yield call(authApi.getUserList);
    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}


function* notesSaga() {
  yield takeEvery(GET_USER_LIST_REQUEST, getUserList);
}

export default notesSaga;