import moment from "moment";
import * as actionTypes from "./types";
import * as actions from "./todoActions";

jest.mock("uuid", () => ({ v4: jest.fn(() => 0) }));

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const text = "Finish docs";
    const expectedAction = {
      type: actionTypes.ADD_TODO,
      id: 0,
      complete: false,
      date: moment().format("MM/DD/YYYY HH:mm:ss"),
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it("should create an action to toggle a todo", () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_TODO,
      id: 0
    };
    expect(actions.toggleTodo(0)).toEqual(expectedAction);
  });

  it("should create an action to delete a todo", () => {
    const expectedAction = {
      type: actionTypes.DELETE_TODO,
      id: 0
    };
    expect(actions.deleteTodo(0)).toEqual(expectedAction);
  });

  it("should create an action to updateTodo a todo", () => {
    const todo = {
      type: actionTypes.UPDATE_TODO,
      id: 0,
      complete: false,
      date: moment().format("MM/DD/YYYY HH:mm:ss"),
      text: "Updated text"
    };

    const expectedAction = {
      type: actionTypes.UPDATE_TODO,
      date: moment().format("MM/DD/YYYY HH:mm:ss"),
      todo
    };
    expect(actions.updateTodo(todo)).toEqual(expectedAction);
  });

  it("should create an action to filter a todo", () => {
    const expectedAction = {
      type: actionTypes.FILTER_TODO,
      filter: "ALL"
    };
    expect(actions.filterTodo("ALL")).toEqual(expectedAction);
  });
});
