import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

import { relayStylePagination } from "@apollo/client/utilities";

import { onError } from "@apollo/client/link/error";
import { GITHUB_BASE_URL } from "./global";

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: "Bearer 580e8dd4f3b5dc1a67fd0b8118db1c401b66cf6a",
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        search: relayStylePagination(["repository_issues"]),
      },
    },
  },
});

export const client = new ApolloClient({
  link,
  cache,
});
