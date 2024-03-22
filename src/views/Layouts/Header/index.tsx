import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export const Header = () => {
  const { token } = useSelector((state: RootState) => state.rootReducer.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname;

  const onGoBack = () => {
    navigate(-1);
  };

  const onLoginClick = () => {
    navigate("/login");
  };
  return (
    <header className="flex items-center text-white px-20 min-h-16 bg-background">
      {pathname != "/" && (
        <div>
          <Button onClick={onGoBack} variant="outline-invert">
            Назад
          </Button>
        </div>
      )}

      <div className="flex flex-1 justify-end">
        {token ? (
          <Button variant="outline-invert">Выход</Button>
        ) : (
          <Button onClick={onLoginClick} variant="outline-invert">
            Войти
          </Button>
        )}
      </div>
    </header>
  );
};
