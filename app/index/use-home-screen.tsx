import { useEffect, useMemo, useState } from "react";

import { useGetUsers } from "@/hooks/use-get-users";
import { usePagination } from "@/hooks/use-pagination";
import { searchUsers } from "@/utils/search-users";

interface UseHomeScreenProps {
  itemsPerPage: number;
}

export function useHomeScreen({ itemsPerPage }: UseHomeScreenProps) {
  const { data: users, isLoading } = useGetUsers();
  const [query, setQuery] = useState<string>("");
  const initialPage = 1;

  const filteredUsers = useMemo(() => {
    return searchUsers(users || [], query);
  }, [users, query]);

  const { startIndex, endIndex, currentPage, totalPages, setCurrentPage } =
    usePagination({
      itemsPerPage,
      totalItems: filteredUsers.length,
    });

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [query]);

  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return {
    pageTitle: `User Management`,
    isLoading,
    query,
    setQuery,
    paginatedUsers,
    currentPage,
    totalPages,
    setCurrentPage,
  };
}
