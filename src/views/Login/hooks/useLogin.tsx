import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

import {
  UserAuthRequest,
  UserAuthValidator,
} from "../../../lib/validators/auth";
import { useRegisterMutation } from "../../../features/account/api/authApi";
import { setUser } from "../../../features/account/slices/authSlice";
import { useState } from "react";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [customError, setCustomError] = useState("");
  const form = useForm<UserAuthRequest>({
    resolver: zodResolver(UserAuthValidator),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = ({
    email,
    password,
  }: Pick<UserAuthRequest, "email" | "password">) => {
    console.log(
      form.getValues("password") !== form.getValues("repeatPassword")
    );
    if (form.getValues("password") !== form.getValues("repeatPassword")) {
      setCustomError("Пароли не совпадают.");
      return;
    }
    setCustomError("");
    registerUser({ email, password })
      .unwrap()
      .then(({ token }) => {
        toast.success("Вы зарегистрировались");
        const data = {
          token,
        };

        dispatch(setUser(data));
      })
      .catch((e) => {
        if (e.status === 400) {
          toast.error("Выберите Email с сайта Reqres.in");
        }
      });
  };

  return {
    form,
    register: form.register,
    errors: form.formState.errors,
    customError,
    isLoading,
    handleSubmit: form.handleSubmit(({ email, password }) =>
      onSubmit({ email, password })
    ),
  };
};
