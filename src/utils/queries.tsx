import { gql } from "@apollo/client";

export const SEARCH_ISSUES_OF_REPOSITORY = gql`
  query SearchIssues($query: String!, $cursor: String) {
    search(first: 10, query: $query, type: ISSUE, after: $cursor) {
      edges {
        node {
          ... on Issue {
            id
            number
            state
            title
            createdAt
            author {
              ... on User {
                name
              }
            }
            labels(first: 1) {
              edges {
                node {
                  name
                }
              }
            }
            comments(orderBy: { field: UPDATED_AT, direction: ASC }) {
              totalCount
            }
            repository {
              nameWithOwner
            }
          }
        }
      }
      issueCount
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const GET_COMMENTS_OF_ISSUE = gql`
  query Comments(
    $repositoryOwner: String!
    $repositoryName: String!
    $number: Int!
    $cursor: String
  ) {
    repository(name: $repositoryName, owner: $repositoryOwner) {
      issue(number: $number) {
        id
        bodyHTML
        title
        comments(first: 100, after: $cursor) {
          edges {
            node {
              id
              bodyHTML
              createdAt
              author {
                login
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($subjectId: ID!, $body: String!) {
    addComment(input: { subjectId: $subjectId, body: $body }) {
      commentEdge {
        node {
          body
        }
      }
    }
  }
`;
