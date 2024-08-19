import Toast from "react-native-toast-message";
import { useMutation, useQueryClient } from "react-query";

import { QueryKeys } from "@/enums/query-keys";
import { UsersService } from "@/services/users.service";

export const useDeleteUser = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => UsersService.delete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.Users);
    },
    onError: (error: any) => {
      Toast.show({
        type: "error",
        text1: "Failed to delete user",
        text2: error?.message,
      });
    },
  });
};
