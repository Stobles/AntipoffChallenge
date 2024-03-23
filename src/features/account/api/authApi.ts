import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Account } from "@/features/types";
import {
  UserRegisterRequest,
  UserLoginRequest,
} from "../../../lib/validators/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),

  endpoints: (builder) => ({
    register: builder.mutation<
      Account,
      Pick<UserRegisterRequest, "email" | "password">
    >({
      query: ({ ...body }) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<Pick<Account, "token">, UserLoginRequest>({
      query: ({ ...body }) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation<Pick<Account, "token">, void>({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
