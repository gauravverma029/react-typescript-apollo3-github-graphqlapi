import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_COMMENTS_OF_ISSUE } from "../../utils/queries";
import { Comments, CommentsVariables } from "../../utils/types/Comments";

import ListItems from "../../components/Comment/ListItems";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import AddCommentForm from "../../components/Comment/AddCommentForm";
import DetailIssue from "../../components/Comment/DetailIssue";

interface ParamTypes {
  issueNumber: string;
}

const Comment: React.FC = () => {
  const { issueNumber } = useParams<ParamTypes>();

  const { data, loading, error } = useQuery<Comments, CommentsVariables>(
    GET_COMMENTS_OF_ISSUE,
    {
      variables: {
        repositoryOwner: "facebook",
        repositoryName: "react",
        number: parseInt(issueNumber),
      },
    }
  );

  if (error) {
    return <ErrorMessage />;
  }

  if (!data && loading) {
    return <Spinner />;
  }

  const edges = data?.repository?.issue?.comments?.edges || false;
  const issueId = data?.repository?.issue?.id;

  const today = new Date();

  return (
    <div data-testid="comments">
      <DetailIssue issueDetail={data?.repository?.issue}></DetailIssue>
      <div className="grid grid-cols-1 gap-y-6 py-6">
        {edges
          ? edges.map((value) => {
              return (
                <ListItems item={value} today={today} key={value?.node?.id} />
              );
            })
          : null}
      </div>
      {issueId ? (
        <AddCommentForm
          issueNumber={issueNumber}
          issueId={data?.repository?.issue?.id || ""}
        />
      ) : null}
    </div>
  );
};

export default Comment;
