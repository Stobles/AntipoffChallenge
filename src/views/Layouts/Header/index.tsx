import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { LogoutButton } from "@/features/account/ui/Logout";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ChevronLeft } from "lucide-react";

export const Header = () => {
  const isMobile = useMediaQuery("only screen and (max-width: 620px)");
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
    <header className="flex items-center text-white px-4 lg:px-20 min-h-16 bg-background">
      {pathname != "/" && (
        <div>
          {isMobile ? (
            <Button
              className="text-primary-foreground bg-transparent"
              onClick={onGoBack}
              variant="ghost"
              size="icon"
            >
              <ChevronLeft size={24} />
            </Button>
          ) : (
            <Button onClick={onGoBack} variant="outline-invert">
              Назад
            </Button>
          )}
        </div>
      )}

      <div className="flex flex-1 justify-end">
        {token ? (
          <LogoutButton />
        ) : (
          <Button onClick={onLoginClick} variant="outline-invert">
            Войти
          </Button>
        )}
      </div>
    </header>
  );
};
