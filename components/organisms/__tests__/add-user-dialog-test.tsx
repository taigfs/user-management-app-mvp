import React from "react";
import renderer from "react-test-renderer";

import { AddUserDialog } from "../add-user-dialog";

it(`renders correctly`, () => {
  const tree = renderer.create(<AddUserDialog />).toJSON();

  expect(tree).toMatchSnapshot();
});
