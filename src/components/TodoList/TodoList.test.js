import React from "react";
import { shallow, mount } from "enzyme";
import { TodoList } from "./TodoList";
import TodoItemRow from "../TodoItemRow/TodoItemRow";

jest.mock("moment", () => () => ({ format: () => "06/18/2018 05:49:28" }));
jest.mock("moment", () => () => ({ format: () => "02/10/2018 12:14:19" }));

describe("TodoList", () => {
  const todos = [
    {
      id: "0",
      text: "todo item 1",
      completed: false,
      date: "06/18/2018 05:49:28"
    },
    {
      id: "1",
      text: "todo item 2",
      completed: true,
      date: "02/10/2018 12:14:19"
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

  describe("TodoList without todos", () => {
    let emptyTodoList;

    beforeEach(() => {
      emptyTodoList = shallow(
        <TodoList
          todos={[]}
          toggleTodo={mockToggle}
          deleteTodo={mockDelete}
          updateTodo={mockUpdate}
        />
      );
    });
    it("does not break with an empty array", () => {
      expect(emptyTodoList.find("TodoItemRow")).toHaveLength(0);
    });

    it("returns the message about an empty array", () => {
      expect(emptyTodoList.find(".empty-message")).toHaveLength(1);
      expect(emptyTodoList.find(".empty-message").text()).toEqual(
        "No todos in list"
      );
    });
  });

  describe("TodoList with todos", () => {
    let todoList;

    beforeEach(() => {
      todoList = mount(<TodoList {...props} />);
    });
    it("renders a valid bootstrap table", () => {
      expect(todoList.find(".table")).toHaveLength(1);
    });

    it("renders todos list", () => {
      expect(todoList.find("TodoItemRow")).toBeDefined();
      expect(todoList.find("TodoItemRow")).toHaveLength(todos.length);
    });
    it("renders a TodoItemRow component", () => {
      expect(
        todoList.contains(
          <TodoItemRow
            key="0"
            id="0"
            text="todo item 1"
            date="06/18/2018 05:49:28"
            completed={false}
            onClick={mockToggle}
            onDelete={mockDelete}
            onUpdate={mockUpdate}
          />
        )
      ).toBeTruthy();
    });

    it("renders correct text in todo", () => {
      expect(todoList.find("TodoItemRow").get(0).props.text).toEqual(
        "todo item 1"
      );
    });
    it("renders correct date in todo", () => {
      expect(todoList.find("TodoItemRow").get(0).props.date).toEqual(
        "06/18/2018 05:49:28"
      );
      expect(todoList.find("TodoItemRow").get(0).props.date).toBe(
        String("06/18/2018 05:49:28")
      );
    });
    it("renders correct completed property in todo", () => {
      expect(todoList.find("TodoItemRow").get(0).props.completed).toEqual(
        false
      );
    });
  });
});
