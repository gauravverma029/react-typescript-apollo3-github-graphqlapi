import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT, GET_COMMENTS_OF_ISSUE } from "../../../utils/queries";
import {
  AddComment as AddCommentType,
  AddCommentVariables,
} from "../../../utils/types/AddComment";

type Props = {
  issueNumber: string;
  issueId: string;
};

const AddCommentForm: React.FC<Props> = ({ issueNumber, issueId }) => {
  const [commentValue, setCommentValue] = useState("");
  const [addComment] = useMutation<AddCommentType, AddCommentVariables>(
    ADD_COMMENT,
    {
      refetchQueries: [
        {
          query: GET_COMMENTS_OF_ISSUE,
          variables: {
            repositoryOwner: "facebook",
            repositoryName: "react",
            number: parseInt(issueNumber),
          },
        },
      ],
      awaitRefetchQueries: true,
    }
  );

  const handleOnsubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addComment({
      variables: { body: commentValue, subjectId: issueId },
    });
    setCommentValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let target = event.target as HTMLTextAreaElement;
    setCommentValue(target.value);
  };

  return (
    <div className="grid grid-cols-1">
      <form onSubmit={handleOnsubmit}>
        <div className="box border rounded flex flex-col shadow bg-white">
          <div className="box__title bg-gray-300 px-3 py-2 border-b">
            <h2 className="text-md text-gray-900 font-medium">
              Add Your Comments
            </h2>
          </div>
          <textarea
            className="resize border rounded-md text-grey-darkest m-6 bg-transparent"
            value={commentValue}
            onChange={handleChange}
            placeholder="Add yourself Comments..."
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 text-gray-100 rounded hover:bg-gray-800 px-4 py-2 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddCommentForm;
