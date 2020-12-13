/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchIssues
// ====================================================

export interface SearchIssues_search_edges_node_App {
  __typename:
    | "App"
    | "MarketplaceListing"
    | "Organization"
    | "PullRequest"
    | "Repository"
    | "User";
}

export interface SearchIssues_search_edges_node_author_Bot {
  __typename: "Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization";
}

export interface SearchIssues_search_edges_node_author_User {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
}

export type SearchIssues_search_edges_node_author =
  | SearchIssues_search_edges_node_author_Bot
  | SearchIssues_search_edges_node_author_User;

export interface SearchIssues_search_edges_node_labels_edges_node {
  __typename: "Label";
  /**
   * Identifies the label name.
   */
  name: string;
}

export interface SearchIssues_search_edges_node_labels_edges {
  __typename: "LabelEdge";
  /**
   * The item at the end of the edge.
   */
  node: SearchIssues_search_edges_node_labels_edges_node | null;
}

export interface SearchIssues_search_edges_node_labels {
  __typename: "LabelConnection";
  /**
   * A list of edges.
   */
  edges: (SearchIssues_search_edges_node_labels_edges | null)[] | null;
}

export interface SearchIssues_search_edges_node_comments {
  __typename: "IssueCommentConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface SearchIssues_search_edges_node_repository {
  __typename: "Repository";
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export interface SearchIssues_search_edges_node {
  __typename: "Issue";
  id: string;
  /**
   * Identifies the issue number.
   */
  number: number;
  /**
   * Identifies the state of the issue.
   */
  state: string;
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * The actor who authored the comment.
   */
  author: SearchIssues_search_edges_node_author | null;
  /**
   * A list of labels associated with the object.
   */
  labels: SearchIssues_search_edges_node_labels | null;
  /**
   * A list of comments associated with the Issue.
   */
  comments: SearchIssues_search_edges_node_comments;
  /**
   * The repository associated with this node.
   */
  repository: SearchIssues_search_edges_node_repository;
}

export interface SearchIssues_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: SearchIssues_search_edges_node | null;
}

export interface SearchIssues_search_pageInfo {
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

export interface SearchIssues_search {
  __typename: "SearchResultItemConnection";
  /**
   * A list of edges.
   */
  edges: (SearchIssues_search_edges | null)[] | null;
  /**
   * The number of issues that matched the search query.
   */
  issueCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: SearchIssues_search_pageInfo;
}

export interface SearchIssues {
  /**
   * Perform a search across resources.
   */
  search: SearchIssues_search;
}

export interface SearchIssuesVariables {
  query: string;
  cursor?: string | null;
}
