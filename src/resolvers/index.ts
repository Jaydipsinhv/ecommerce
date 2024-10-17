import { GraphQLString, GraphQLObjectType } from 'graphql';

export const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
  },
});

export const ProductQuery = {
  type: ProductType,
  args: { id: { type: GraphQLString } },
  resolve(parent: any, args: any) {
    return {
      id: args.id,
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: '100.00',
    };
  },
};
