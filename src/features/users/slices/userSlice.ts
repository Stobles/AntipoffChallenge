import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { User } from "../types";

export type favoritesState = {
  favorites: User[];
};

const initialState: favoritesState = {
  favorites: [],
};

export const FavoriteUsersSlice = createSlice({
  name: "favorites_users_slice",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<User>) {
      const isFavorite = state.favorites.find(
        (cat) => cat.id === action.payload.id
      );

      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (cat) => cat.id !== action.payload.id
        );
        toast.error("Котик был удален из избранного");
      } else {
        state.favorites.push(action.payload);
        toast.success("Котик был добавлен в избранное");
      }
    },
  },
});

export const { toggleFavorite } = FavoriteUsersSlice.actions;

export const userReducer = FavoriteUsersSlice.reducer;
