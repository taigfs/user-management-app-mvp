import { useMemo, useState } from "react";
import { View, Text } from "react-native";

import { Input } from "@/components/atoms/input";
import { Loading } from "@/components/atoms/loading";
import { AddUserDialog } from "@/components/organisms/add-user-dialog";
import { UserTable } from "@/components/organisms/user-table/user-table";
import { tableFields } from "@/constants/user-table-fields";
import { useGetUsers } from "@/hooks/use-get-users";
import { searchUsers } from "@/utils/search-users";

export default function HomeScreen() {
  const pageTitle = `User Management`;

  const { data: users, isLoading } = useGetUsers();
  const [showAddUserDialog, setShowAddUserDialog] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");

  const filteredUsers = useMemo(() => {
    return searchUsers(users || [], query);
  }, [users, query]);

  const onAddUserDialogShowChange = (value: boolean) => {
    setShowAddUserDialog(value);
  };

  return (
    <View className="mt-8 mx-auto px-4 py-8 text-white w-full max-w-4xl">
      <View className="flex items-center justify-between mb-6 flex-row">
        <Text className="text-2xl font-bold text-white">{pageTitle}</Text>
        <AddUserDialog
          show={showAddUserDialog}
          onShowChange={onAddUserDialogShowChange}
        />
      </View>
      <View className="overflow-x-auto">
        {isLoading ? (
          <View className="flex justify-center">
            <Loading />
          </View>
        ) : (
          <>
            <Input
              placeholder="Search..."
              value={query}
              onChange={(e: any) => setQuery(e.target.value)}
              className="mb-4"
            />
            <UserTable data={filteredUsers} fields={tableFields} />
          </>
        )}
      </View>
      <View className="flex justify-end mt-6">{/* TODO: Pagination */}</View>
    </View>
  );
}
