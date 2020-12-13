import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { MockDataForIssues } from "../../../__MockData__";
import List from "./index";
import ListItems from "../ListItems";

afterEach(cleanup);

const handleFilterStates = () => {};
const today = new Date("2020-12-13T02:33:56Z");
const edges = MockDataForIssues?.search?.edges || false;

describe("List Component", () => {
  test("Should Render with children and mock data", async () => {
    const { asFragment } = render(
      <BrowserRouter>
        <List handleFilterStates={handleFilterStates}>
          {edges &&
            edges.map((value) => {
              return (
                <ListItems item={value} today={today} key={value?.node?.id} />
              );
            })}
        </List>
      </BrowserRouter>
    );

    const html = asFragment();
    expect(html).toMatchSnapshot();
  });
});
