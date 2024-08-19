import { CreatedUser } from "@/types/user";

export function searchUsers(
  users: CreatedUser[],
  query: string,
): CreatedUser[] {
  const lowerCaseQuery = query.toLowerCase();

  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(lowerCaseQuery) ||
      user.email.toLowerCase().includes(lowerCaseQuery) ||
      user.phone.toLowerCase().includes(lowerCaseQuery)
    );
  });
}
