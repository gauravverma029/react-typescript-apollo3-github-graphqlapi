import React from "react";
import { cleanup, render } from "@testing-library/react";

import ErrorMessage from "./index";

afterEach(cleanup);

describe("ErrorMessage Component", () => {
  test("Should Render", async () => {
    const { asFragment } = render(<ErrorMessage />);
    const html = asFragment();
    expect(html).toMatchSnapshot();
  });

  test("Should Contain Text 'Something Wrong'", async () => {
    const { getByText } = render(<ErrorMessage />);
    getByText(/Something Wrong/i);
  });

  test("Should Contain div tag for text", async () => {
    const { getByText } = render(<ErrorMessage />);
    expect(getByText(/Something Wrong/i).tagName).toBe("DIV");
  });

  test("Should Contain ClassName", async () => {
    const { getByText } = render(<ErrorMessage />);
    expect(getByText(/Something Wrong/i).className).toBe(
      "flex items-center justify-center text-gray-400"
    );
  });
});
