import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipies: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipies.push(action.payload);
      localStorage.setItem("items", JSON.stringify(state.recipies));
    },

    addToFavourite: (state, action) => {
      state.recipies.map((recipy) => {
        if (recipy.id === action.payload.id) {
          recipy.favourite = !recipy.favourite;
        }
      });

      localStorage.setItem("items", JSON.stringify(state.recipies));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRecipe, addToFavourite } = recipeSlice.actions;

export default recipeSlice.reducer;
