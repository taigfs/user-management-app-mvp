import { View, Text } from "react-native";

import { DeleteUserDialog } from "../delete-user-dialog";
import { EditUserDialog } from "../edit-user-dialog";

import { TableField } from "@/types/table-field";
import { User } from "@/types/user";

interface UserTableProps {
  data: User[];
  fields: TableField[];
}

export const UserTable = ({ data, fields }: UserTableProps) => {
  return (
    <View className="w-full table-auto">
      <View>
        <View className="bg-muted text-muted-foreground flex-row">
          {fields.map((field) => (
            <Text
              key={field.key}
              className={`px-2 py-2 text-left text-white flex-${field.flex}`}
            >
              {field.label}
            </Text>
          ))}
          <Text className="px-2 py-2 flex-2 text-white">Actions</Text>
        </View>
      </View>
      <View>
        {data.map((user) => (
          <View key={user.id} className="border-b flex-row">
            <View className="px-2 py-2 flex-3">{user.name}</View>
            <View className="px-2 py-2 flex-4">{user.email}</View>
            <View className="px-2 py-2 flex-4">{user.phone}</View>
            <View className="px-2 py-2 flex-2 flex-row">
              <EditUserDialog />
              <DeleteUserDialog />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
