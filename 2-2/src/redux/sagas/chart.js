import axios from "axios";
import { all, put, takeLatest, fork, call } from "redux-saga/effects";
import {
  GET_CHART_REQUEST,
  GET_CHART_SUCCESS,
  GET_CHART_FAILURE,
} from "../reducer/chart";

const getChartApi = () => {
  return axios.get("http://localhost:8000/chart");
};

function* getChart(action) {
  try {
    const result = yield call(getChartApi);
    yield put({
      type: GET_CHART_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_CHART_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchGetChart() {
  yield takeLatest(GET_CHART_REQUEST, getChart);
}

export default function* contentsSaga() {
  yield all([fork(watchGetChart)]);
}
