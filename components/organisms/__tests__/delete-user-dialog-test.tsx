import React from "react";
import renderer from "react-test-renderer";

import { DeleteUserDialog } from "../delete-user-dialog";

it(`renders correctly`, () => {
  const tree = renderer.create(<DeleteUserDialog />).toJSON();

  expect(tree).toMatchSnapshot();
});
