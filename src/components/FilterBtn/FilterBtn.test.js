import React from "react";
import { shallow } from "enzyme";
import { FilterBtn } from "./FilterBtn";

describe("FilterBtn", () => {
  const mockFilterTodo = jest.fn();
  const props = { children: "ALL", active: false, filterTodo: mockFilterTodo };
  const filterBtn = shallow(<FilterBtn {...props} />);

  it("renders correctly", () => {
    expect(filterBtn).toMatchSnapshot();
  });

  it("displays the filter text from props", () => {
    expect(filterBtn.find(".btn-outline-secondary").text()).toEqual("ALL");
  });

  describe("when clicking the filter button", () => {
    beforeEach(() => {
      filterBtn.find(".btn-outline-secondary").simulate("click");
    });

    it("dispatches the `filterTodo()` it receives from props with the own filter value", () => {
      expect(mockFilterTodo).toHaveBeenCalledWith();
    });
  });

  describe("after clicking the filter button", () => {
    it("active props should be changed", () => {
      expect(filterBtn.props().disabled).toEqual(false);
    });
  });
});
