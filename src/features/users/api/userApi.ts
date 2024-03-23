import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  User,
  QueryParams,
  ResponseType,
  ResponseUserIdType,
  ResponseAvatarPatch,
  PatchParams,
} from "@/features/types";

const generateQueryStr = (baseString: string, query: QueryParams): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  return queryString;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/users/",
  }),

  endpoints: (builder) => ({
    getUsers: builder.query<ResponseType, QueryParams>({
      query: (queryParams: QueryParams) => {
        const queryStr = generateQueryStr("?", queryParams);

        return { url: queryStr };
      },
    }),
    getUser: builder.query<ResponseUserIdType, Pick<User, "id">>({
      query: ({ id }) => {
        return { url: `${id}` };
      },
    }),
    patchUser: builder.mutation<ResponseAvatarPatch, PatchParams>({
      query: ({ id, ...body }) => {
        console.log(body);
        return {
          url: `${id}`,
          method: "PATCH",
          body,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, usePatchUserMutation } =
  userApi;
