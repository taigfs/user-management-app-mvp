import { useState, useMemo } from "react";

interface PaginationProps {
  itemsPerPage?: number;
  totalItems: number;
}

export const usePagination = ({
  itemsPerPage = 5,
  totalItems,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {
      startIndex,
      endIndex,
      currentPage,
      totalPages,
    };
  }, [currentPage, itemsPerPage, totalItems]);

  return {
    ...paginatedData,
    setCurrentPage,
  };
};
