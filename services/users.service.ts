import { api } from "./api";

import { ApiGetUsersResponse } from "@/types/api-get-users-response";
import { CreatedUser, User } from "@/types/user";

export abstract class UsersService {
  static async get(): Promise<CreatedUser[]> {
    const { data } = await api.get<ApiGetUsersResponse>(
      "/database/rows/table/341557/?user_field_names=true",
    );
    return data.results;
  }

  static async create(user: User): Promise<User> {
    const { data } = await api.post<User>(
      "/database/rows/table/341557/?user_field_names=true",
      user,
    );
    return data;
  }

  static async update(id: string, user: Partial<User>): Promise<User> {
    const { data } = await api.patch<User>(
      `/database/rows/table/341557/${id}/?user_field_names=true`,
      user,
    );
    return data;
  }

  static async delete(id: string): Promise<void> {
    await api.delete(`/database/rows/table/341557/${id}/`);
  }
}
