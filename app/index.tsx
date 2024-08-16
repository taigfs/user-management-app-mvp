import { useState } from "react";
import { View, Text } from "react-native";

import { Input } from "@/components/atoms/input";
import { AddUserDialog } from "@/components/organisms/add-user-dialog";
import { UserTable } from "@/components/organisms/user-table/user-table";
import { tableFields } from "@/constants/user-table-fields";
// TODO: Replace with real data
import { users } from "@/test-utils/users-dummy";

export default function HomeScreen() {
  const pageTitle = `User Management`;

  // TODO: implement search logic
  const [query, setQuery] = useState<string>("");

  return (
    <View className="mt-8 mx-auto px-4 py-8 text-white w-full max-w-4xl">
      <View className="flex items-center justify-between mb-6 flex-row">
        <Text className="text-2xl font-bold text-white">{pageTitle}</Text>
        <AddUserDialog />
      </View>
      <View className="overflow-x-auto">
        <Input
          placeholder="Search..."
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          className="mb-4"
        />
        <UserTable data={users} fields={tableFields} />
      </View>
      <View className="flex justify-end mt-6">{/* TODO: Pagination */}</View>
    </View>
  );
}
