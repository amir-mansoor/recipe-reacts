import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipies: [],
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrement } = recipeSlice.actions;

export default recipeSlice.reducer;
