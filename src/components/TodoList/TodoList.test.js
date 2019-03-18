import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "./TodoList";

describe("TodoList", () => {
  const todos = [
    {
      id: "0",
      text: "todo item 1",
      completed: false
    },
    {
      id: "1",
      text: "todo item 2",
      completed: true
    },
    {
      id: "2",
      text: "todo item 3",
      completed: true
    }
  ];
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();
  const mockUpdate = jest.fn();
  const props = {
    todos,
    toggleTodo: mockToggle,
    deleteTodo: mockDelete,
    updateTodo: mockUpdate
  };
  const todoList = shallow(<TodoList {...props} />);

  it("renders correctly", () => {
    expect(todoList).toMatchSnapshot();
  });
  it("renders a valid bootstrap table", () => {
    expect(todoList.find(".table")).toHaveLength(1);
  });

  describe("rendering list of todos", () => {
    it("creates a TodoItemRow component", () => {
      expect(todoList.find("TodoItemRow").exists()).toBe(true);
    });
  });
});
