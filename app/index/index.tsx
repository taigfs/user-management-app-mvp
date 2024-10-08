import { useState } from "react";
import { View, Text } from "react-native";

import { useHomeScreen } from "./use-home-screen";

import { Input } from "@/components/atoms/input";
import { Loading } from "@/components/atoms/loading";
import { Pagination } from "@/components/molecules/pagination";
import { AddUserDialog } from "@/components/organisms/add-user-dialog";
import { UserTable } from "@/components/organisms/user-table/user-table";
import { tableFields } from "@/constants/user-table-fields";

export default function HomeScreen() {
  const pageTitle = `User Management`;
  const itemsPerPage = 2;
  const [showAddUserDialog, setShowAddUserDialog] = useState<boolean>(false);

  const {
    isLoading,
    query,
    setQuery,
    paginatedUsers,
    currentPage,
    totalPages,
    setCurrentPage,
  } = useHomeScreen({ itemsPerPage });

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
            <UserTable data={paginatedUsers} fields={tableFields} />
          </>
        )}
      </View>
      <View className="flex justify-end mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </View>
    </View>
  );
}
