import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginSuccess, RegisterSuccess } from "../types";
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
      RegisterSuccess,
      Pick<UserRegisterRequest, "email" | "password">
    >({
      query: ({ ...body }) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<LoginSuccess, UserLoginRequest>({
      query: ({ ...body }) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation<LoginSuccess, void>({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
