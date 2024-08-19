import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <View className="flex flex-row justify-center">
      {pageNumbers.map((page) => (
        <TouchableOpacity
          key={page}
          onPress={() => onPageChange(page)}
          className={`mx-1 px-3 py-1 rounded ${
            page === currentPage
              ? "bg-blue-500 border border-blue-600"
              : "bg-black border border-gray-600"
          }`}
        >
          <Text className="text-white">{page}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
