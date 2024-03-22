export type RegisterSuccess = {
  id: number;
  token: string;
};

export type LoginSuccess = {
  token: string;
};

export type AccountType = {
  email: string;
  username: string;
  token: string;
};
