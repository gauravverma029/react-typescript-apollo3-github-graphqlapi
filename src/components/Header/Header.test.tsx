import React from "react";
import { cleanup, render } from "@testing-library/react";

import Header from "./index";

afterEach(cleanup);

describe("Header Component", () => {
  test("Should Render", async () => {
    const { asFragment } = render(<Header />);
    const html = asFragment();
    expect(html).toMatchSnapshot();
  });

  test("Should Contain Text 'Github'", async () => {
    const { getByText } = render(<Header />);
    getByText("Github");
  });

  test("Should Contain div tag for github text", async () => {
    const { getByText } = render(<Header />);
    expect(getByText("Github").tagName).toBe("DIV");
  });

  test("Should Contain ClassName", async () => {
    const { getByText } = render(<Header />);
    expect(getByText("Github").className).toBe(
      "text-2xl font-semibold text-white"
    );
  });
});
