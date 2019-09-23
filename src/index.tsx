import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
//Saga
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchCharactersStart } from "./features/fetch-characters/saga";

//Reducers
import { reducer as fetchCharacters } from "./features/fetch-characters/reducer";

//Initialization
const rootReducer = combineReducers({
  fetchCharacters
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield fork(fetchCharactersStart);
}
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
