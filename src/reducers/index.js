import { combineReducers } from "redux";
import todoReducer from "../reducers/todoReducer";
import filterReducer from "../reducers/filterReducer";

export default combineReducers({
  todos: todoReducer,
  filterTodo: filterReducer
});
