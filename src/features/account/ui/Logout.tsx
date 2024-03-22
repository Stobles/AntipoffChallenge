import { useDispatch } from "react-redux";
import { Button } from "../../../components/Button";
import { useLogoutMutation } from "../api/authApi";
import { deleteUser } from "../slices/authSlice";

export const LogoutButton = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const onClick = () => {
    logout();
    dispatch(deleteUser());
  };
  return (
    <Button onClick={onClick} variant="outline-invert">
      Выход
    </Button>
  );
};
