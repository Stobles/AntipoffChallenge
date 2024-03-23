import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useLogin } from "./hooks/useLogin";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export const LoginPage = () => {
  const { register, errors, handleSubmit } = useLogin();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full max-w-[500px] min-h-[300px] shadow-popover rounded-md p-4">
        <h1 className="text-lg mb-2">Войти</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

          <div className="relative flex flex-col gap-2">
            <label className="text-base" htmlFor="password">
              Пароль
            </label>
            <div className="relative">
              <Input
                className={`${errors.password && "border border-destructive"}`}
                type={`${isPasswordVisible ? "text" : "password"}`}
                placeholder="******"
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

          <Button size="full">Войти</Button>
        </form>
        <div className="mt-2">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};
