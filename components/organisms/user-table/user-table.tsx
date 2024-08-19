import { useState } from "react";
import { View, Text } from "react-native";

import { DeleteUserDialog } from "../delete-user-dialog";
import { EditUserDialog } from "../edit-user-dialog";

import { TableField } from "@/types/table-field";
import { CreatedUser } from "@/types/user";

interface UserTableProps {
  data?: CreatedUser[];
  fields: TableField[];
}

export const UserTable = ({ data = [], fields }: UserTableProps) => {
  const [currentUpdateUserDialog, setCurrentUpdateUserDialog] = useState<
    string | null
  >(null);
  const [currentDeleteUserDialog, setCurrentDeleteUserDialog] = useState<
    string | null
  >(null);

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
            <View className="px-2 py-2 flex-3">
              <Text className="text-white">{user.name}</Text>
            </View>
            <View className="px-2 py-2 flex-4">
              <Text className="text-white">{user.email}</Text>
            </View>
            <View className="px-2 py-2 flex-4">
              <Text className="text-white">{user.phone}</Text>
            </View>
            <View className="px-2 py-2 flex-2 flex-row">
              <EditUserDialog
                initialValues={user}
                show={currentUpdateUserDialog === user.id}
                onShowChange={(v) =>
                  setCurrentUpdateUserDialog(v ? user.id : null)
                }
              />
              <DeleteUserDialog
                show={currentDeleteUserDialog === user.id}
                onShowChange={(v) =>
                  setCurrentDeleteUserDialog(v ? user.id : null)
                }
                id={user.id}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
