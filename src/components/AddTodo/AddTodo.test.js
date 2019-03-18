import React from "react";
import { shallow } from "enzyme";
import { AddTodo } from "./AddTodo";

describe("AddTodo", () => {
  const text = "Learn unit testing";
  const mockAddTodo = jest.fn();
  const props = { todo: { text }, addTodo: mockAddTodo };
  const addTodo = shallow(<AddTodo {...props} />);

  it("renders correctly", () => {
    expect(addTodo).toMatchSnapshot();
  });
  it("should have the `Add Todo` button", () => {
    expect(addTodo.find(".btn-success").text()).toEqual("Add Todo");
  });

  it("initilizes an inputValue in `state`", () => {
    expect(addTodo.state()).toEqual({ inputValue: "" });
  });

  describe("before typing into the add todo input", () => {
    const inputValue = "Learn unit testing";

    beforeEach(() => {
      addTodo
        .find(".form-control")
        .simulate("change", { target: { value: inputValue } });
    });

    it("updates the inputValue in `state`", () => {
      expect(addTodo.state().inputValue).toEqual(inputValue);
    });
  });

  describe("when clicking the `Add Todo` button", () => {
    beforeEach(() => {
      addTodo.find(".btn-success").simulate("click");
    });

    it("successfully calls the onClick handler", () => {
      expect(mockAddTodo.mock.calls.length).toEqual(1);
    });

    it("dispatches the `addTodo()` it receives from props", () => {
      expect(mockAddTodo).toHaveBeenCalledWith(text);
    });
  });

  describe("after clicking the `Add Todo` button", () => {
    it("inputValue in `state` should be empty", () => {
      expect(addTodo.state()).toEqual({ inputValue: "" });
    });
  });
});
