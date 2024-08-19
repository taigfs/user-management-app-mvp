import Toast from "react-native-toast-message";
import { useMutation, useQueryClient } from "react-query";

import { QueryKeys } from "@/enums/query-keys";
import { UsersService } from "@/services/users.service";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(UsersService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.Users);
    },
    onError: (error: any) => {
      Toast.show({
        type: "error",
        text1: "Failed to create user",
        text2: error?.message,
      });
    },
  });
};
