import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a connected AddTodo component", () => {
    expect(app.find("Connect(AddTodo)").exists()).toBe(true);
  });

  it("contains a connected TodoList component", () => {
    expect(app.find("Connect(TodoList)").exists()).toBe(true);
  });
});
