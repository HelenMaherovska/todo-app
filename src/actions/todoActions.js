import moment from "moment";
import uuid from 'uuid';
import * as actionTypes from "./types";

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  id: uuid.v4(),
  complete: false,
  date: moment().format("MM/DD/YYYY HH:mm:ss"),
  text
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  id
});

export const updateTodo = todo => ({
  type: actionTypes.UPDATE_TODO,
  date: moment().format("MM/DD/YYYY HH:mm:ss"),
  todo
});

export const filterTodo = filter => ({
  type: actionTypes.FILTER_TODO,
  filter
});
