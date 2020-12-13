import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";

import Filters from "./index";

afterEach(cleanup);

const handleFilterStates = () => {};

describe("Filter Component", () => {
  test("Should Render", async () => {
    const { asFragment } = render(
      <Filters handleFilterStates={handleFilterStates} />
    );
    const html = asFragment();
    expect(html).toMatchSnapshot();
  });

  test("Should Contain Filter All", async () => {
    const { getByText } = render(
      <Filters handleFilterStates={handleFilterStates} />
    );
    getByText("All");
  });

  test("Should Contain Filter Open", async () => {
    const { getByText } = render(
      <Filters handleFilterStates={handleFilterStates} />
    );
    getByText("Open");
  });

  test("Should Contain Filter Closed", async () => {
    const { getByText } = render(
      <Filters handleFilterStates={handleFilterStates} />
    );
    getByText("Closed");
  });

  test("Click on All Filter", async () => {
    const { getByText } = render(
      <Filters handleFilterStates={handleFilterStates} />
    );
    fireEvent.click(getByText("All"));
  });
  test("Click on Open Filter", async () => {
    const { getByText } = render(
      <Filters handleFilterStates={handleFilterStates} />
    );
    fireEvent.click(getByText("Open"));
  });
  test("Click on Closed Filter", async () => {
    const { getByText } = render(
      <Filters handleFilterStates={handleFilterStates} />
    );
    fireEvent.click(getByText("Closed"));
  });
});
