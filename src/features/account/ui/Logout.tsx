import { useDispatch } from "react-redux";
import { Button } from "../../../components/Button";
import { useLogoutMutation } from "../api/authApi";
import { deleteUser } from "../slices/authSlice";
import { clearFavorites } from "../../users/slices/userSlice";

export const LogoutButton = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const onClick = () => {
    logout();
    dispatch(deleteUser());
    dispatch(clearFavorites());
  };
  return (
    <Button onClick={onClick} variant="outline-invert">
      Выход
    </Button>
  );
};
