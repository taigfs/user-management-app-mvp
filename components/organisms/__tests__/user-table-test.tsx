import React from "react";
import renderer from "react-test-renderer";

import { UserTable } from "../user-table/user-table";

it(`renders correctly`, () => {
  const tree = renderer.create(<UserTable data={[]} fields={[]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
