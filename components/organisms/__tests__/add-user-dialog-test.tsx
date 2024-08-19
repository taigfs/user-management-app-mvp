import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import renderer from "react-test-renderer";

import { AddUserDialog } from "../add-user-dialog";

const queryClient = new QueryClient();

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <QueryClientProvider client={queryClient}>
        <AddUserDialog show onShowChange={() => {}} />
      </QueryClientProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
