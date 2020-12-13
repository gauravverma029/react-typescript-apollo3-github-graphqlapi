/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Comments
// ====================================================

export interface Comments_repository_issue_comments_edges_node_author {
  __typename: "Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User";
  /**
   * The username of the actor.
   */
  login: string;
}

export interface Comments_repository_issue_comments_edges_node {
  __typename: "IssueComment";
  id: string;
  /**
   * The body rendered to HTML.
   */
  bodyHTML: any;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * The actor who authored the comment.
   */
  author: Comments_repository_issue_comments_edges_node_author | null;
}

export interface Comments_repository_issue_comments_edges {
  __typename: "IssueCommentEdge";
  /**
   * The item at the end of the edge.
   */
  node: Comments_repository_issue_comments_edges_node | null;
}

export interface Comments_repository_issue_comments_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface Comments_repository_issue_comments {
  __typename: "IssueCommentConnection";
  /**
   * A list of edges.
   */
  edges: (Comments_repository_issue_comments_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: Comments_repository_issue_comments_pageInfo;
}

export interface Comments_repository_issue {
  __typename: "Issue";
  id: string;
  /**
   * The body rendered to HTML.
   */
  bodyHTML: any;
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * A list of comments associated with the Issue.
   */
  comments: Comments_repository_issue_comments;
}

export interface Comments_repository {
  __typename: "Repository";
  /**
   * Returns a single issue from the current repository by number.
   */
  issue: Comments_repository_issue | null;
}

export interface Comments {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: Comments_repository | null;
}

export interface CommentsVariables {
  repositoryOwner: string;
  repositoryName: string;
  number: number;
  cursor?: string | null;
}
