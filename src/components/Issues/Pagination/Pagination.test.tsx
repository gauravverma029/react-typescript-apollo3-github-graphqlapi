import React from "react";
import { cleanup, render } from "@testing-library/react";

import Pagination from "./index";

afterEach(cleanup);
const handleLoadMore = () => {};

describe("Pagination Component", () => {
  test("Should Render", async () => {
    const { asFragment } = render(
      <Pagination onClickLoadMore={handleLoadMore} />
    );
    const html = asFragment();
    expect(html).toMatchSnapshot();
  });

  test("Should Contain Text 'Load More'", async () => {
    const { getByText } = render(
      <Pagination onClickLoadMore={handleLoadMore} />
    );
    getByText("Load More");
  });

  test("Should Contain div tag for Load More text", async () => {
    const { getByText } = render(
      <Pagination onClickLoadMore={handleLoadMore} />
    );
    expect(getByText("Load More").tagName).toBe("DIV");
  });

  test("Should Contain ClassName", async () => {
    const { getByText } = render(
      <Pagination onClickLoadMore={handleLoadMore} />
    );
    expect(getByText("Load More").className).toBe(
      "text-violet-700 text-base font-semibold px-6 py-2 border-2 border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200"
    );
  });
});
