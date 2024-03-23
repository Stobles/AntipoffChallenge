import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

import { UserLoginRequest, UserAuthValidator } from "@/lib/validators/auth";
import { useLoginMutation } from "@/features/account/api/authApi";
import { setUser } from "@/features/account/slices/authSlice";
import { useState } from "react";
import { clearFavorites } from "@/features/users/slices/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();
  const [customError, setCustomError] = useState("");
  const form = useForm<Pick<UserLoginRequest, "email" | "password">>({
    resolver: zodResolver(UserAuthValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = ({ email, password }: UserLoginRequest) => {
    setCustomError("");
    loginUser({ email, password })
      .unwrap()
      .then(({ token }) => {
        toast.success("Вы авторизовались");
        const data = {
          token,
        };

        dispatch(setUser(data));
      })
      .catch((e) => {
        if (e.status === 400) {
          toast.error("Пользователь не найден.");
        }
      });
    dispatch(clearFavorites());
  };

  return {
    register: form.register,
    errors: form.formState.errors,
    customError,
    isLoading,
    handleSubmit: form.handleSubmit(({ email, password }) =>
      onSubmit({ email, password })
    ),
  };
};
