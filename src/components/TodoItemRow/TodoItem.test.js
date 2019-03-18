import React from "react";
import { shallow } from "enzyme";
import TodoItemRow from "./TodoItemRow";

jest.mock("moment", () => () => ({ format: () => "06/18/2018 05:49:28" }));

describe("TodoItemRow", () => {
  const id = "12345";
  const text = "Learn unit testing";
  const completed = false;
  const date = "06/18/2018 05:49:28";
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();
  const mockUpdate = jest.fn();

  const props = {
    id,
    text,
    completed,
    date,
    onClick: mockToggle,
    onDelete: mockDelete,
    onUpdate: mockUpdate
  };
  const todoItemRow = shallow(<TodoItemRow {...props} />);

  it("renders correctly", () => {
    expect(todoItemRow).toMatchSnapshot();
  });

  it("initilizes isEditing value in `state`", () => {
    expect(todoItemRow.state()).toEqual({ isEditing: false });
  });

  describe("default markup", () => {
    it("has the `Edit` button", () => {
      expect(todoItemRow.find(".btn-info").text()).toEqual("Edit");
    });
    describe("row item", () => {
      const rows = todoItemRow.find(".todo-text");

      it("has the todo with text and date", () => {
        expect(rows.length).toEqual(2);
      });
      it("has a proper todo text", () => {
        expect(rows.first().text()).toEqual(text);
      });
      it("has a proper todo date", () => {
        const rows = todoItemRow.find(".todo-text");
        expect(rows.last().text()).toEqual(date);
      });
      describe("when toggle the todo item", () => {
        beforeEach(() => {
          rows.first().simulate("click");
        });
        it("calls the onClick callback", () => {
          expect(mockToggle).toHaveBeenCalledWith(id);
        });

        it("updates text style", () => {
          expect(rows.first().hasClass("completed")).toBeFalsy();
        });
      });
    });

    it("has the `Delete Todo` button", () => {
      expect(todoItemRow.find(".btn-danger").text()).toEqual("Delete");
    });

    describe("when clicking the `Delete` button", () => {
      beforeEach(() => {
        todoItemRow.find(".btn-danger").simulate("click");
      });
      it("calls the onDelete callback", () => {
        expect(mockDelete).toHaveBeenCalledWith(id);
      });
    });

    describe("when clicking the `Edit` button", () => {
      beforeEach(() => {
        todoItemRow.find(".btn-info").simulate("click");
      });

      it("should update the isEditing in `state`", () => {
        expect(todoItemRow.state()).toEqual({ isEditing: true });
      });
    });
  });

  describe("edit markup", () => {
    beforeEach(() => {
      todoItemRow.setState({ isEditing: true });
    });
    it("has the input control", () => {
      expect(todoItemRow.find(".form-control")).toHaveLength(1);
    });

    it("has the `Save` button", () => {
      expect(todoItemRow.find(".btn-success").text()).toEqual("Save");
    });

    it("has the `Cancel` button", () => {
      expect(todoItemRow.find(".btn-danger").text()).toEqual("Cancel");
    });

    describe("when clicking the `Cancel` button", () => {
      beforeEach(() => {
        todoItemRow.find(".btn-danger").simulate("click");
      });

      it("should update the isEditing in `state`", () => {
        expect(todoItemRow.state()).toEqual({ isEditing: false });
      });
    });
  });
});
