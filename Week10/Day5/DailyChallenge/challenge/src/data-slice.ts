import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {RecipePreview} from "./types.ts";

const recipes: RecipePreview[] = [];

export const todoSlice = createSlice({
    name: "re",
    initialState: recipes,
    reducers: {
        addRecipe: (state, action: PayloadAction<RecipePreview[]>) => state.concat(action.payload),
    }
})

export const {addRecipe} = todoSlice.actions;
export default todoSlice.reducer;