export type Account = {
  id: string;
  token: string;
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type PatchParams = {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
};

export type ResponseType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

export type ResponseAvatarPatch = {
  updatedAt: number;
};

export type ResponseUserIdType = {
  data: User;
  support: {
    text: string;
  };
};

export type QueryParams = {
  page?: number;
  per_page?: number;
};
