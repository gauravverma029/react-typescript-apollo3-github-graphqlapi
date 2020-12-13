import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { ADD_COMMENT } from "../../../utils/queries";
import AddComment from "./index";

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: ADD_COMMENT,
      variables: { body: "Test", subjectId: "MDU6SXNzdWU3NjM5MDc2NTI" },
    },
    result: { data: { body: "Test", subjectId: "MDU6SXNzdWU3NjM5MDc2NTI" } },
  },
];

describe("AddCommentForm Component", () => {
  test("Runs the Comment Mutaion query", async () => {
    const { getByPlaceholderText, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AddComment issueNumber="MDU6SXNzdWU3NjM5MDc2NTI" issueId="23434" />
      </MockedProvider>
    );

    const commentTextArea = getByPlaceholderText(/Add yourself Comments.../i);
    fireEvent.change(commentTextArea, {
      target: { value: "We are doing testing" },
    });

    const submitButton = getByText(/Submit/i);
    fireEvent.click(submitButton);
  });
});
