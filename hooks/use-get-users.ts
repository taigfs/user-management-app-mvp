import Toast from "react-native-toast-message";
import { useQuery } from "react-query";

import { QueryKeys } from "@/enums/query-keys";
import { UsersService } from "@/services/users.service";
import { CreatedUser } from "@/types/user";

export const useGetUsers = () => {
  return useQuery<CreatedUser[], Error>([QueryKeys.Users], UsersService.get, {
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Failed to get users",
        text2: error?.message,
      });
    },
  });
};
