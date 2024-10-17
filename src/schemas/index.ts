import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { ProductQuery } from '../resolvers';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    product: ProductQuery,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
