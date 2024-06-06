import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slices/recipeSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
  },
});
