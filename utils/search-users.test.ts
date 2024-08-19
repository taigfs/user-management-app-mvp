import { CreatedUser } from "@/types/user";
import { searchUsers } from "@/utils/search-users";

describe("searchUsers", () => {
  const users: CreatedUser[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "123456789",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987654321",
    },
    {
      id: "3",
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "456123789",
    },
  ];

  it("should return all users when query is empty", () => {
    const result = searchUsers(users, "");
    expect(result).toEqual(users);
  });

  it("should filter users by name", () => {
    const result = searchUsers(users, "John");
    expect(result).toEqual([users[0]]);
  });

  it("should filter users by email", () => {
    const result = searchUsers(users, "jane@example.com");
    expect(result).toEqual([users[1]]);
  });

  it("should filter users by phone", () => {
    const result = searchUsers(users, "456");
    expect(result).toEqual([users[0], users[2]]);
  });

  it("should return an empty array if no users match the query", () => {
    const result = searchUsers(users, "notfound");
    expect(result).toEqual([]);
  });
});
