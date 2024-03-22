import { z } from "zod";

export const UserRegisterValidator = z.object({
  username: z.string().min(3, "Никнейм должен содержать более 3 символов"),
  email: z
    .string()
    .min(1, "Поле должно быть заполнено.")
    .email("Неправильный формат email."),
  password: z
    .string()
    .min(6, "Пароль должен содержать не менее 6 символов")
    .max(18, "Пароль не должен быть длинее 18 символов"),
  repeatPassword: z
    .string()
    .min(6, "Пароль должен содержать не менее 6 символов")
    .max(18, "Пароль не должен быть длинее 18 символов"),
});

export const UserAuthValidator = z.object({
  email: z
    .string()
    .min(1, "Поле должно быть заполнено.")
    .email("Неправильный формат email."),
  password: z
    .string()
    .min(6, "Пароль должен содержать не менее 6 символов")
    .max(18, "Пароль не должен быть длинее 18 символов"),
});

export type UserRegisterRequest = z.infer<typeof UserRegisterValidator>;
export type UserLoginRequest = z.infer<typeof UserAuthValidator>;
