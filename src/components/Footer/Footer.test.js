import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer", () => {
  const footer = shallow(<Footer />);

  it("renders correctly", () => {
    expect(footer).toMatchSnapshot();
  });

  it("creates a FilterBtn component", () => {
    expect(footer.find("Connect(FilterBtn)").exists()).toBe(true);
  });

  it("creates a list of FilterBtn component", () => {
    expect(footer.find("Connect(FilterBtn)")).toHaveLength(3);
  });
});
