import {useAppDispatch, useAppSelector} from "./hook.ts";
import {selectGenre} from "./book-slice.ts";
import {
    selectBooks,
    selectHorrorBooks,
    selectFantasyBooks,
    selectScienceFictionBooks,
} from "./book-selectors";

export function BookList() {
    const selectedGenre = useAppSelector((state) => state.books.selectedGenre);
    const dispatch = useAppDispatch();

    const booksToShow = useAppSelector((state) => {
        switch (selectedGenre) {
            case "Horror":
                return selectHorrorBooks(state);
            case "Fantasy":
                return selectFantasyBooks(state);
            case "Science Fiction":
                return selectScienceFictionBooks(state);
            case "All":
            default:
                return selectBooks(state);
        }
    });

    return (
        <>
            <button onClick={() => dispatch(selectGenre("All"))}>All</button>
            <button onClick={() => dispatch(selectGenre("Science Fiction"))}>Science Fiction</button>
            <button onClick={() => dispatch(selectGenre("Fantasy"))}>Fantasy</button>
            <button onClick={() => dispatch(selectGenre("Horror"))}>Horror</button>
            <ul>
                {booksToShow.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> — {book.author} ({book.genre})
                    </li>
                ))}
            </ul>
        </>
    )
}