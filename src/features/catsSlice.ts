import { createSlice } from "@reduxjs/toolkit";
import { CatsTypes } from "../types/catsTypes";
import { getAllCats } from "./catsThunks";

const initialState: { allCats: CatsTypes[]; favoriteCats: CatsTypes[] } = {
  allCats: [],
  favoriteCats: [],
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { id } = action.payload;
      if (!state.favoriteCats.some((cat) => cat.id === id)) {
        state.favoriteCats.push(action.payload);
      }
    },
    deleteFavorites: (state, action) => {
      console.log(action.payload);
      const id = action.payload;
      state.favoriteCats = state.favoriteCats.filter((el) => el.id !== id);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllCats.fulfilled, (state, action) => {
      if (action.payload) {
        state.allCats = [...state.allCats, ...action.payload];
      }
    });
  },
});

export const { actions: catsActions } = catsSlice;
