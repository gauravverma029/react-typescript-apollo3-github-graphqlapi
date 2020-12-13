/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddComment
// ====================================================

export interface AddComment_addComment_commentEdge_node {
  __typename: "IssueComment";
  /**
   * The body as Markdown.
   */
  body: string;
}

export interface AddComment_addComment_commentEdge {
  __typename: "IssueCommentEdge";
  /**
   * The item at the end of the edge.
   */
  node: AddComment_addComment_commentEdge_node | null;
}

export interface AddComment_addComment {
  __typename: "AddCommentPayload";
  /**
   * The edge from the subject's comment connection.
   */
  commentEdge: AddComment_addComment_commentEdge | null;
}

export interface AddComment {
  /**
   * Adds a comment to an Issue or Pull Request.
   */
  addComment: AddComment_addComment | null;
}

export interface AddCommentVariables {
  subjectId: string;
  body: string;
}
