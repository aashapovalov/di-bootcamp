import {booksMock} from "./book-mocks.ts";

import type { GenreType, BookType } from "./book-mocks.ts";

import {createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";


type BookStateType = {
    selectedGenre: GenreType;
    books: BookType[];
}
const initialState: BookStateType = {
    selectedGenre: "All",
    books: booksMock,
}

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        selectGenre: (state, action: PayloadAction<GenreType>) => {
            state.selectedGenre = action.payload
        },
    }
})

export const {selectGenre} = bookSlice.actions;
export default bookSlice.reducer;
