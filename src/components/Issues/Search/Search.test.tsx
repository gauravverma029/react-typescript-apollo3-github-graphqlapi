import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";

import Search from "./index";

afterEach(cleanup);

const handleFilterStates = () => {};

describe("Search Component", () => {
  test("Should Render", async () => {
    const { asFragment } = render(
      <Search handleFilterStates={handleFilterStates} />
    );
    const html = asFragment();
    expect(html).toMatchSnapshot();
  });

  test("Should Contain Filter All", async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <Search handleFilterStates={handleFilterStates} />
    );
    const searchInput = getByPlaceholderText("Search all Issues");
    fireEvent.change(searchInput, { target: { value: "facebook" } });
    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });
    fireEvent.submit(getByTestId("form"));
  });
});
