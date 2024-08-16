import React from "react";
import renderer from "react-test-renderer";

import { Dialog } from "../dialog";

it(`renders correctly`, () => {
  const tree = renderer.create(<Dialog />).toJSON();

  expect(tree).toMatchSnapshot();
});
