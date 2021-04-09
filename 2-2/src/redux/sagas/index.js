import { all, fork } from "redux-saga/effects";
import chartSaga from "./chart";

export default function* rootSaga() {
  yield all([fork(chartSaga)]);
}
