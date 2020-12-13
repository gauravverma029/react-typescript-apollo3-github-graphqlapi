import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

import { MockDataForComments } from "../../__MockData__";

import { GET_COMMENTS_OF_ISSUE } from "../../utils/queries";
import CommentContainer from "./index";

const mockErrorResults = {
  request: {
    query: GET_COMMENTS_OF_ISSUE,
    variables: {
      repositoryOwner: "facebook",
      repositoryName: "react",
      number: 20446,
    },
  },
  error: new Error("aw shucks"),
};

const mockSucessResults = {
  request: {
    query: GET_COMMENTS_OF_ISSUE,
    variables: {
      repositoryOwner: "facebook",
      repositoryName: "react",
      number: 20446,
    },
  },
  result: {
    data: {
      MockDataForComments,
    },
  },
};

describe("Comments Container", () => {
  test("Runs the Comment Fetch query", async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/20446"]}>
        <MockedProvider mocks={[mockSucessResults]} addTypename={false}>
          <CommentContainer />
        </MockedProvider>
      </MemoryRouter>
    );
    await waitFor(() => getByTestId("loading"));
  });

  test("Runs the Fetch query with Network Error or other errors", async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/20446"]}>
        <MockedProvider mocks={[mockErrorResults]} addTypename={false}>
          <CommentContainer />
        </MockedProvider>
      </MemoryRouter>
    );
    await waitFor(() => getByText(/Something Wrong/i));
  });
});
