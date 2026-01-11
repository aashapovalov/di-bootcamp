import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { BookType } from "./book-slice";

// Base selector: whole slice
export const selectBooksState = (state: RootState) => state.books;

// 1) Required: selectBooks -> all books
export const selectBooks = createSelector(
    [selectBooksState],
    (booksState): BookType[] => booksState.books
);

// Helper factory (optional, keeps genre selectors DRY)
const makeSelectBooksByGenre = (genre: BookType["genre"]) =>
    createSelector([selectBooks], (books) =>
        books.filter((b) => b.genre === genre)
    );

// 2) Genre-specific selectors
export const selectHorrorBooks = makeSelectBooksByGenre("Horror");
export const selectFantasyBooks = makeSelectBooksByGenre("Fantasy");
export const selectScienceFictionBooks = makeSelectBooksByGenre("Science Fiction");
