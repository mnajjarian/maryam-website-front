import * as React from "react";
import { mount } from "enzyme";
import App from "../pages";

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", () => {
      const wrap = mount(<App />);
      expect(wrap.find("h1").text()).toBe("Hello Next");
    });
  });
});
