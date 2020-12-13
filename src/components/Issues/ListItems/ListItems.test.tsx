import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { MockDataForIssues } from "../../../__MockData__";

import ListItems from "./index";

afterEach(cleanup);
let MockDataForIssuesNode = MockDataForIssues?.search?.edges[0];
const today = new Date("2020-12-13T02:33:56Z");

describe("ListItems Component", () => {
  test("Should Render and mock data", async () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ListItems item={MockDataForIssuesNode} today={today} />
      </BrowserRouter>
    );

    const html = asFragment();
    expect(html).toMatchSnapshot();
  });

  test("Should Render title", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <ListItems item={MockDataForIssuesNode} today={today} />
      </BrowserRouter>
    );
    getByText(/Bug: Trailing Comma in Arrays and Dict/i);
  });

  test("Click on Link for comments", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <ListItems item={MockDataForIssuesNode} today={today} />
      </BrowserRouter>
    );
    fireEvent.click(getByText(/20450/i));
  });
});
