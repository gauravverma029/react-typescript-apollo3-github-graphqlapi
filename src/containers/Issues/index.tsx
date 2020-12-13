import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { SEARCH_ISSUES_OF_REPOSITORY } from "../../utils/queries";
import { convertToString } from "../../utils/functions";
import { initialStateSearch } from "../../utils/global";
import {
  SearchIssues,
  SearchIssuesVariables,
} from "../../utils/types/SearchIssues";

import Search from "../../components/Issues/Search";
import List from "../../components/Issues/List";
import ListItems from "../../components/Issues/ListItems";
import Pagination from "../../components/Issues/Pagination";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

const Issues: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(initialStateSearch);
  const today = new Date();
  const { data, loading, error, fetchMore } = useQuery<
    SearchIssues,
    SearchIssuesVariables
  >(SEARCH_ISSUES_OF_REPOSITORY, {
    variables: {
      query: convertToString(searchQuery),
    },
  });

  const handleFilterStates = (props: FiterStateProps) => {
    const { type, value } = props;
    const incoming = { [type]: value };
    setSearchQuery({ ...searchQuery, ...incoming });
    fetchMore({
      variables: {
        query: convertToString({ ...searchQuery, ...incoming }),
      },
    });
  };

  if (error) {
    return <ErrorMessage />;
  }

  if (!data || loading) {
    return <Spinner />;
  }

  const handleLoadMoreIssues = () => {
    fetchMore({
      variables: {
        cursor: data.search.pageInfo.endCursor,
      },
    });
  };

  const edges = data?.search?.edges || false;

  return (
    <div data-testid="issues">
      <Search handleFilterStates={handleFilterStates} />
      <List handleFilterStates={handleFilterStates}>
        {edges &&
          edges.map((value) => {
            return (
              <ListItems item={value} today={today} key={value?.node?.id} />
            );
          })}
      </List>
      {data?.search?.pageInfo?.hasNextPage ? (
        <Pagination onClickLoadMore={handleLoadMoreIssues} />
      ) : null}
    </div>
  );
};

export default Issues;
