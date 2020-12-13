import React from "react";
import { cleanup, render } from "@testing-library/react";

import Spinner from "./index";

afterEach(cleanup);

describe("Spinner Component inital Loading when Content not present", () => {
  test("Should Render", async () => {
    const { asFragment } = render(<Spinner />);
    const html = asFragment();
    expect(html).toMatchSnapshot();
  });
});
