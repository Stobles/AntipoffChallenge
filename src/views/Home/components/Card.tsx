import { HeartIcon, HeartOffIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { toggleFavorite } from "@/features/users/slices/userSlice";
import { User } from "@/features/types";

export const Card = ({ user }: { user: User }) => {
  const { favorites } = useSelector(
    (state: RootState) => state.rootReducer.user
  );
  const dispatch = useDispatch();
  const onToggleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    dispatch(toggleFavorite(user));
  };

  const isFavorited = favorites.find((favorite) => favorite.id === user.id);

  const name = user.first_name + " " + user.last_name;
  return (
    <Link
      to={`/details/${user.id}`}
      className="w-[280px] flex flex-col gap-4 items-center shadow-card rounded-md p-5"
    >
      <div className="w-[125px] h-[125px] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={user.avatar}
          alt="avatar"
        />
      </div>
      <h3>{name}</h3>
      <div className="flex justify-end w-full">
        <Button onClick={(e) => onToggleLike(e)} variant="ghost" size="icon">
          {isFavorited ? <HeartOffIcon size={22} /> : <HeartIcon size={22} />}
        </Button>
      </div>
    </Link>
  );
};
