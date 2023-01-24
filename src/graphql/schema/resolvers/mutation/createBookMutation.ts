import { GraphQLNonNull } from "graphql";
import { createBook } from "../../../../data/bookService";
import CreateBookInput from "../../typedefs/CreateBookInput";
import GqlBook from "../../typedefs/GqlBook";

const createBookMutation = {
  type: GqlBook,
  args: {
    input: {
      type: new GraphQLNonNull(CreateBookInput),
      description: "Book input to be created",
    },
  },
  resolve: async (source: unknown, { input: { title, author } }: any) => {
    return createBook(title, author);
  },
};

export default createBookMutation;
