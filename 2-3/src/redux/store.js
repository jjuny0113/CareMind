import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../redux/reducer/index";
import rootSaga from "./sagas/index";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
