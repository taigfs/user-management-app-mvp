import Toast from "react-native-toast-message";
import { useMutation, useQueryClient } from "react-query";

import { QueryKeys } from "@/enums/query-keys";
import { UsersService } from "@/services/users.service";
import { User } from "@/types/user";

export const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation((user: Partial<User>) => UsersService.update(id, user), {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.Users);
    },
    onError: (error: any) => {
      Toast.show({
        type: "error",
        text1: "Failed to update user",
        text2: error?.message,
      });
    },
  });
};
