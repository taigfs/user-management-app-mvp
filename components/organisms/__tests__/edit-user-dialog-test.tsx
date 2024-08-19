import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import renderer from "react-test-renderer";

import { EditUserDialog } from "../edit-user-dialog";

import { users } from "@/test-utils/users-dummy";
import { CreatedUser } from "@/types/user";

const queryClient = new QueryClient();

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <QueryClientProvider client={queryClient}>
        <EditUserDialog
          show
          onShowChange={() => {}}
          initialValues={users[0] as CreatedUser}
        />
      </QueryClientProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
