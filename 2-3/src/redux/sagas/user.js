import axios from "axios";
import { all, put, takeLatest, fork, call } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
} from "../reducer/user";

function logInAPI(data) {
  return axios.post("", data);
}
//login시 위에껄 쓰지만 로그인 상황을 보여주기 위해서 server에 get으로 요청해 비슷한 상황을 만들어봤습니다.

function logInSimulAPI() {
  return axios.get("http://localhost:8000/login");
}

function* logIn(action) {
  try {
    const result = yield call(logInSimulAPI);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function getUserInfoAPI() {
  return axios.get("http://localhost:8000/user");
}

function* getUserInfo(action) {
  try {
    const result = yield call(getUserInfoAPI);
    yield put({
      type: GET_USER_INFO_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    put({
      type: GET_USER_INFO_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchUserLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchUserInfo() {
  yield takeLatest(GET_USER_INFO_REQUEST, getUserInfo);
}

export default function* contentsSaga() {
  yield all([fork(watchUserLogin), fork(watchUserInfo)]);
}
