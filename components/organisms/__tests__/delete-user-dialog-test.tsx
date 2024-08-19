import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import renderer from "react-test-renderer";

import { DeleteUserDialog } from "../delete-user-dialog";

const queryClient = new QueryClient();

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <QueryClientProvider client={queryClient}>
        <DeleteUserDialog show onShowChange={() => {}} id="1" />
      </QueryClientProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
