import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { MockDataForCommentsNode } from "../../../__MockData__";

import ListItems from "./index";

afterEach(cleanup);

describe("Comments ListItems Component", () => {
  const today = new Date("2020-12-13T02:33:56Z");

  test("Should Render and mock data", async () => {
    const { asFragment } = render(
      <BrowserRouter>
        <BrowserRouter>
          <ListItems item={MockDataForCommentsNode} today={today} />
        </BrowserRouter>
      </BrowserRouter>
    );

    const html = asFragment();
    expect(html).toMatchSnapshot();
  });

  test("Should Render title", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <ListItems item={MockDataForCommentsNode} today={today} />
      </BrowserRouter>
    );
    getByText(/look like this bug report/i);
  });
});
