import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useRegister } from "./hooks/useRegister";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export const RegisterPage = () => {
  const { register, errors, customError, handleSubmit } = useRegister();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full max-w-[500px] min-h-[300px] shadow-popover rounded-md p-4">
        <h1 className="text-lg mb-2">Регистрация</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="username">
              Имя
            </label>
            <Input
              className={`${errors.username && "border border-destructive"}`}
              placeholder="Максим"
              {...register("username")}
            />
            {errors.username && (
              <span className="text-xs text-destructive">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="email">
              Email
            </label>
            <Input
              className={`${errors.email && "border border-destructive"}`}
              placeholder="test@gmail.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-destructive">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="password">
              Пароль
            </label>
            <div className="relative">
              <Input
                className={`${errors.password && "border border-destructive"}`}
                placeholder="******"
                type={`${isPasswordVisible ? "text" : "password"}`}
                {...register("password")}
              />
              <Button
                className="absolute right-2 bottom-2 cursor-pointer"
                variant="ghost"
                size="icon"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                type="button"
              >
                {isPasswordVisible ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </Button>
            </div>
            {errors.password && (
              <span className="text-xs text-destructive">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="repeatPassword">
              Подтвердите пароль
            </label>

            <div className="relative">
              <Input
                className={`${
                  errors.repeatPassword && "border border-destructive"
                }`}
                type={`${isRepeatPasswordVisible ? "text" : "password"}`}
                placeholder="******"
                {...register("repeatPassword")}
              />
              <Button
                className="absolute right-2 bottom-2 cursor-pointer"
                variant="ghost"
                size="icon"
                onClick={() => setIsRepeatPasswordVisible((prev) => !prev)}
                type="button"
              >
                {isRepeatPasswordVisible ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </Button>
            </div>
            {errors.repeatPassword && (
              <span className="text-xs text-destructive">
                {errors.repeatPassword.message}
              </span>
            )}
            {customError && (
              <span className="text-xs text-destructive">{customError}</span>
            )}
          </div>

          <Button size="full">Зарегистрироваться</Button>
        </form>
        <div className="mt-2">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
};
