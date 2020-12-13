import { SearchIssues } from "../utils/types/SearchIssues";
import {
  Comments,
  Comments_repository_issue_comments_edges,
} from "../utils/types/Comments";

export const MockDataForIssues: SearchIssues = {
  search: {
    __typename: "SearchResultItemConnection",
    edges: [
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjQ3OTI0ODU=",
          number: 20450,
          state: "OPEN",
          title: "Bug: Trailing Comma in Arrays and Dict",
          createdAt: "2020-12-13T02:33:56Z",
          author: {
            __typename: "User",
            name: "Shankara Narayana",
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Status: Unconfirmed",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 0,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjM5MDc2NTI=",
          number: 20448,
          state: "OPEN",
          title:
            "[eslint-plugin-react-hooks]: could not find hook called conditionally when using an anonymous function component",
          createdAt: "2020-12-12T14:42:42Z",
          author: {
            __typename: "User",
            name: null,
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Component: ESLint Rules",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 1,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjM1MTkwMTE=",
          number: 20447,
          state: "OPEN",
          title:
            "Bug: [reactdev tools][react native] Bridge was already shutdown. Inspection is broken",
          createdAt: "2020-12-12T09:48:20Z",
          author: {
            __typename: "User",
            name: null,
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Component: Developer Tools",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 0,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjMyMTM2OTQ=",
          number: 20446,
          state: "OPEN",
          title: "Using dangerouslySetInnerHTML with <Script> Tag?",
          createdAt: "2020-12-12T02:57:21Z",
          author: {
            __typename: "User",
            name: "chenyang wu",
          },
          labels: {
            __typename: "LabelConnection",
            edges: [],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 1,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjIxNDg3ODk=",
          number: 20435,
          state: "OPEN",
          title:
            "Feature Request(devtools): `launch-editor` for selected component",
          createdAt: "2020-12-11T09:37:45Z",
          author: {
            __typename: "User",
            name: "Eric Chen",
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Component: Developer Tools",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 1,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjE4NjkwMTQ=",
          number: 20431,
          state: "OPEN",
          title:
            'Error: "Commit tree does not contain fiber 5766. This is a bug in React DevTools."',
          createdAt: "2020-12-11T04:00:11Z",
          author: {
            __typename: "User",
            name: "Dixit Keshavbhai Patel",
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Component: Developer Tools",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 5,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjE1MjIwMjk=",
          number: 20430,
          state: "CLOSED",
          title:
            'Error: "Commit tree already contains fiber 1719. This is a bug in React DevTools."',
          createdAt: "2020-12-10T19:01:25Z",
          author: {
            __typename: "User",
            name: "Shalom Levi",
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Component: Developer Tools",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 2,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjA4ODE0NTY=",
          number: 20423,
          state: "CLOSED",
          title: "Bug: ",
          createdAt: "2020-12-10T04:36:53Z",
          author: {
            __typename: "User",
            name: null,
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Status: Unconfirmed",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 0,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjA2NjkzODA=",
          number: 20418,
          state: "CLOSED",
          title:
            '[React DevTools] Bug: irrelevant "Cannot update a component from inside the function body of a different component"',
          createdAt: "2020-12-09T21:01:14Z",
          author: {
            __typename: "User",
            name: "Jules Sam. Randolph",
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Status: Unconfirmed",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 1,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Issue",
          id: "MDU6SXNzdWU3NjA2NjEwMDg=",
          number: 20417,
          state: "OPEN",
          title:
            "Bug: react-refresh is refreshing components without signatures and different hooks instead of remount",
          createdAt: "2020-12-09T20:49:59Z",
          author: {
            __typename: "User",
            name: "Bnaya Peretz",
          },
          labels: {
            __typename: "LabelConnection",
            edges: [
              {
                __typename: "LabelEdge",
                node: {
                  __typename: "Label",
                  name: "Component: Fast Refresh",
                },
              },
            ],
          },
          comments: {
            __typename: "IssueCommentConnection",
            totalCount: 2,
          },
          repository: {
            __typename: "Repository",
            nameWithOwner: "facebook/react",
          },
        },
      },
    ],
    issueCount: 9777,
    pageInfo: {
      __typename: "PageInfo",
      endCursor: "Y3Vyc29yOjEw",
      hasNextPage: true,
    },
  },
};

export const MockDataForComments: Comments = {
  repository: {
    __typename: "Repository",
    issue: {
      __typename: "Issue",
      id: "MDU6SXNzdWU3NjMyMTM2OTQ=",
      bodyHTML:
        '<p>Backend return an html type string and I want render in react through</p>\n<div></div>\n<p>however, html contains the JS code that dynamically add data to </p> Tag and it does not render any data in my page<br>\nthe table is empty<p></p><p>How could solve this problem?</p><p>Thanks for any ideas</p><table role="table">\n\n</table>',
      title: "Using dangerouslySetInnerHTML with",
      comments: {
        __typename: "IssueCommentConnection",
        edges: [
          {
            __typename: "IssueCommentEdge",
            node: {
              __typename: "IssueComment",
              id: "MDEyOklzc3VlQ29tbWVudDc0Mzc4MjUxNw==",
              bodyHTML:
                '<p>It doesn\'t look like this bug report has enough info for one of us to reproduce it.</p>\n<p>Please provide a CodeSandbox (<a rel="nofollow" href="https://react.new/">https://react.new/</a>), a link to a repository on GitHub, or provide a minimal code example that reproduces the problem.</p>\n<p>Here are some tips for providing a minimal example: <a rel="nofollow" href="https://stackoverflow.com/help/mcve">https://stackoverflow.com/help/mcve</a></p>\n\n',
              createdAt: "2020-12-12T16:47:43Z",
              author: {
                __typename: "User",
                login: "eps1lon",
              },
            },
          },
        ],
        pageInfo: {
          __typename: "PageInfo",
          endCursor: "Y3Vyc29yOnYyOpHOLFU4dQ==",
          hasNextPage: false,
        },
      },
    },
  },
};

export const MockDataForCommentsNode: Comments_repository_issue_comments_edges = {
  __typename: "IssueCommentEdge",
  node: {
    __typename: "IssueComment",
    id: "MDEyOklzc3VlQ29tbWVudDc0Mzc4MjUxNw==",
    bodyHTML:
      '<p>It doesn\'t look like this bug report has enough info for one of us to reproduce it.</p>\n<p>Please provide a CodeSandbox (<a rel="nofollow" href="https://react.new/">https://react.new/</a>), a link to a repository on GitHub, or provide a minimal code example that reproduces the problem.</p>\n<p>Here are some tips for providing a minimal example: <a rel="nofollow" href="https://stackoverflow.com/help/mcve">https://stackoverflow.com/help/mcve</a></p>\n\n',
    createdAt: "2020-12-12T16:47:43Z",
    author: {
      __typename: "User",
      login: "eps1lon",
    },
  },
};
