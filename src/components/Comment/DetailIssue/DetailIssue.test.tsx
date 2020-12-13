import React from "react";
import { cleanup, render } from "@testing-library/react";

import { MockDataForComments } from "../../../__MockData__";

import DetailIssue from "./index";

afterEach(cleanup);

describe("Comments DetailIssue Component", () => {
  test("Should Render and mock data", async () => {
    const { asFragment } = render(
      <DetailIssue issueDetail={MockDataForComments?.repository?.issue} />
    );

    const html = asFragment();
    expect(html).toMatchSnapshot();
  });

  test("Should Render title and Description", async () => {
    const { getByText } = render(
      <DetailIssue issueDetail={MockDataForComments?.repository?.issue} />
    );
    getByText(/Using dangerouslySetInnerHTML with/i);
    getByText(/Backend return an html type string/i);
  });
});
