export type GenreType = 'Horror' | "Fantasy" | "Science Fiction" | "All"

export type BookType = {
    id: number;
    title: string;
    author: string;
    genre: GenreType;
}
export const booksMock: BookType[] = [
    {
        id: 1,
        title: "Dracula",
        author: "Bram Stoker",
        genre: "Horror",
    },
    {
        id: 2,
        title: "It",
        author: "Stephen King",
        genre: "Horror",
    },
    {
        id: 3,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
    },
    {
        id: 4,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
    },
    {
        id: 5,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
    },
    {
        id: 6,
        title: "Foundation",
        author: "Isaac Asimov",
        genre: "Science Fiction",
    },
];
