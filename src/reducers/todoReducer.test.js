import todoReducer from "./todoReducer";
import * as actionTypes from "../actions/types";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(todoReducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      todoReducer([], {
        type: actionTypes.ADD_TODO,
        text: "Run the tests",
        id: 0
      })
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      }
    ]);

    expect(
      todoReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0
          }
        ],
        {
          type: actionTypes.ADD_TODO,
          text: "Use Redux",
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1
      }
    ]);

    expect(
      todoReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0
          },
          {
            text: "Use Redux",
            completed: false,
            id: 1
          }
        ],
        {
          type: actionTypes.ADD_TODO,
          text: "Fix the tests",
          id: 2
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      },
      {
        text: "Use Redux",
        completed: false,
        id: 1
      },
      {
        text: "Fix the tests",
        completed: false,
        id: 2
      }
    ]);
  });

  it("should handle TOGGLE_TODO", () => {
    expect(
      todoReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        {
          type: actionTypes.TOGGLE_TODO,
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should handle DELETE_TODO", () => {
    expect(
      todoReducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        {
          type: actionTypes.DELETE_TODO,
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });
  it("should handle UPDATE_TODO", () => {
    expect(
      todoReducer(
        [
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        {
          type: actionTypes.UPDATE_TODO,
          todo: {
            id: 0,
            completed: false,
            text: "Updated todo"
          }
        }
      )
    ).toEqual([
      {
        text: "Updated todo",
        completed: false,
        id: 0
      }
    ]);
  });
});
