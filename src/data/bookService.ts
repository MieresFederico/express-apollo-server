import { Book } from "./types/Book";

const books: Book[] = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const getAllBooks = async (): Promise<Book[]> => {
  return books;
};

export const createBook = async (
  title: string,
  author: string
): Promise<Book> => {
  const newBook = { id: books[books.length - 1].id + 1, title, author };
  books.push(newBook);
  return newBook;
};
