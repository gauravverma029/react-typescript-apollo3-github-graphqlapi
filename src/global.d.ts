type GithubHTML = HTMLElement;
type GithubURI = string;
type GithubDateTime = string;

type initialStateSearchType = {
  state: string | null | undefined;
  onlyIssue: string;
  nameWithOwner: string;
  searchString: string | null | undefined;
};

type FiterStateProps = {
  type: string;
  value: string;
};
