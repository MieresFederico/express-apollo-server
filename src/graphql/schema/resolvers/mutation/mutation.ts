import { GraphQLObjectType } from "graphql";
import createBookMutation from "./createBookMutation";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createBook: createBookMutation,
  },
});

export default mutation;
