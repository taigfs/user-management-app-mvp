import React from "react";
import renderer from "react-test-renderer";

import { Label } from "../label";

it(`renders correctly`, () => {
  const tree = renderer.create(<Label nativeID="something" />).toJSON();

  expect(tree).toMatchSnapshot();
});
