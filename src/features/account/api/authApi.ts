import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterSuccess } from "../types";
import { UserAuthRequest } from "../../../lib/validators/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),

  endpoints: (builder) => ({
    register: builder.mutation<
      RegisterSuccess,
      Pick<UserAuthRequest, "email" | "password">
    >({
      query: ({ ...body }) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
