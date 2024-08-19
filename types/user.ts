export type User = {
  id?: string;
  name: string;
  email: string;
  phone: string;
};

export type CreatedUser = User & {
  id: string;
};
