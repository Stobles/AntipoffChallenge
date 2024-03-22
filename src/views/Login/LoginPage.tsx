import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useLogin } from "./hooks/useLogin";

export const LoginPage = () => {
  const { register, errors, customError, handleSubmit } = useLogin();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full max-w-[500px] min-h-[300px] shadow-popover rounded-md p-4">
        <h1 className="text-lg mb-2">Регистрация</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="email">
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
              Электронная почта
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
            <label className="text-base" htmlFor="email">
              Пароль
            </label>
            <Input
              className={`${errors.password && "border border-destructive"}`}
              placeholder="******"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-xs text-destructive">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="email">
              Подтвердите пароль
            </label>
            <Input
              className={`${
                errors.repeatPassword && "border border-destructive"
              }`}
              placeholder="******"
              {...register("repeatPassword")}
            />
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
      </div>
    </div>
  );
};
