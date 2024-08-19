import React from "react";
import renderer from "react-test-renderer";

import { Pagination } from "../pagination";

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
