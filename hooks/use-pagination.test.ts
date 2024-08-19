import { renderHook, act } from "@testing-library/react-native";

import { usePagination } from "@/hooks/use-pagination";

describe("usePagination", () => {
  it("should initialize with the correct default values", () => {
    const { result } = renderHook(() => usePagination({ totalItems: 10 }));

    expect(result.current.startIndex).toBe(0);
    expect(result.current.endIndex).toBe(5);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(2);
  });

  it("should update the current page when setCurrentPage is called", () => {
    const { result } = renderHook(() => usePagination({ totalItems: 10 }));

    act(() => {
      result.current.setCurrentPage(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.startIndex).toBe(5);
    expect(result.current.endIndex).toBe(10);
  });

  it("should calculate the correct startIndex and endIndex based on the currentPage and itemsPerPage", () => {
    const { result } = renderHook(() =>
      usePagination({ itemsPerPage: 3, totalItems: 10 }),
    );

    act(() => {
      result.current.setCurrentPage(2);
    });

    expect(result.current.startIndex).toBe(3);
    expect(result.current.endIndex).toBe(6);
  });

  it("should recalculate the totalPages when the totalItems changes", () => {
    const { result, rerender } = renderHook(
      ({ totalItems }) => usePagination({ totalItems }),
      { initialProps: { totalItems: 10 } },
    );

    expect(result.current.totalPages).toBe(2);

    rerender({ totalItems: 15 });

    expect(result.current.totalPages).toBe(3);
  });
});
