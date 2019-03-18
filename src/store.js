import { createStore, applyMiddleware, compose } from "redux";
import persistData from "./middleware/persistData";
import rootReducer from "./reducers/index";

let initialState = {};

const persistedState = localStorage.getItem("todos");

if (persistedState) {
  initialState = JSON.parse(persistedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(persistData))
);

export default store;
