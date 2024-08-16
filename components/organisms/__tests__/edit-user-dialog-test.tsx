import React from "react";
import renderer from "react-test-renderer";

import { EditUserDialog } from "../edit-user-dialog";

it(`renders correctly`, () => {
  const tree = renderer.create(<EditUserDialog />).toJSON();

  expect(tree).toMatchSnapshot();
});
