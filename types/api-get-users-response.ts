import { CreatedUser } from "./user";

export type ApiGetUsersResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: CreatedUser[];
};
