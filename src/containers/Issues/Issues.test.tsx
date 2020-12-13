import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

import { MockDataForIssues } from "../../__MockData__";

import { SEARCH_ISSUES_OF_REPOSITORY } from "../../utils/queries";
import IssuesContainer from "./index";

afterEach(cleanup);

const mockErrorResults = {
  request: {
    query: SEARCH_ISSUES_OF_REPOSITORY,
    variables: {
      query: "facebook",
    },
  },
  error: new Error("aw shucks"),
};

const mockSucessResults = {
  request: {
    query: SEARCH_ISSUES_OF_REPOSITORY,
    variables: {
      query: "facebook",
    },
  },
  result: {
    data: {
      MockDataForIssues,
    },
  },
};

describe("Issues Container", () => {
  test("Runs the Issues Fetch query", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MockedProvider mocks={[mockSucessResults]} addTypename={false}>
          <IssuesContainer />
        </MockedProvider>
      </MemoryRouter>
    );

    await waitFor(() => getByTestId("loading"));
  });

  test("Runs the Fetch query with Network Error or other errors", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <MockedProvider
          mocks={[mockErrorResults]}
          addTypename={false}
          defaultOptions={{
            watchQuery: { fetchPolicy: "no-cache" },
            query: { fetchPolicy: "no-cache" },
          }}
        >
          <IssuesContainer />
        </MockedProvider>
      </MemoryRouter>
    );
    await waitFor(() => getByText(/Something Wrong/i));
  });
});
