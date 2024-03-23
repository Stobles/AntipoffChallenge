import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { User } from "@/features/types";

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
        (user) => user.id === action.payload.id
      );

      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (user) => user.id !== action.payload.id
        );
        toast.error("Пользователь был удален из избранного");
      } else {
        state.favorites.push(action.payload);
        toast.success("Пользователь был добавлен в избранное");
      }
    },
    clearFavorites(state) {
      state.favorites = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = FavoriteUsersSlice.actions;

export const userReducer = FavoriteUsersSlice.reducer;
