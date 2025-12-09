// Create a simple library system with TypeScript:
//
// Interface Book: Define an interface Book with the following properties:
//
//     title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)
// Class Library: Create a class Library with:
//
// A private property books (array of Book).
// A public method addBook to add a new book to the library.
//     A public method getBookDetails that returns details of a book based on the isbn.
//     Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:
//
//     A readonly property website (string) for the library’s website.
//     A public method listBooks that returns a list of all book titles in the library.
//     Create an instance of DigitalLibrary, add some books to it,
//     and then print out the details of the books and the list of all book titles.
interface Book {
    title: string,
    author: string,
    isbn: string,
    publishedYear: number,
    genre?: string,
}

class Library {
    constructor(

        protected books: Book[],
    ) {
    }
    addBook(book: Book) {
        this.books.push(book);
    }
    getBookDetails(isbn: string) {
        for (let book of this.books) {
            if (book.isbn === isbn) {
                return book;
            }
        }
    }
}

class DigitalLibrary extends Library {
    constructor(
        public readonly website: string,
    ) {
        super([]);
    }
    listBooks() {
        let listBooks: string[] = [];
        for (const book of this.books) {
            listBooks.push(book.title)
        }
        return listBooks;
    }
}

const dl = new DigitalLibrary("https://mylibrary.com");

dl.addBook({ title: "1984", author: "Orwell", isbn: "123", publishedYear: 1949 });
dl.addBook({ title: "Dune", author: "Herbert", isbn: "456", publishedYear: 1965, genre: "Sci-Fi" });

console.log(dl.getBookDetails("123"));
console.log(dl.listBooks());
console.log(dl.website);