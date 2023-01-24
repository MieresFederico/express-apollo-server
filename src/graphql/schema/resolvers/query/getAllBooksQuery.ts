import { GraphQLList } from "graphql";
import { getAllBooks } from "../../../../data/bookService";
import { Book } from "../../../../data/types/Book";
import GqlBook from "../../typedefs/GqlBook";

const getAllBooksQuery = {
  type: new GraphQLList(GqlBook),
  resolve: async (): Promise<Book[]> => {
    return getAllBooks();
  },
};

export default getAllBooksQuery;
