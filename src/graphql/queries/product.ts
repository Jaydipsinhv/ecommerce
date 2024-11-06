import { gql } from 'apollo-server-express';

const product = {
  typeDefs: gql`
    extend type Query {
      getProducts(id: ID!): [Product]!
    }
  `,

  resolvers: {
    async getProducts(_parent: any, args: { id: any; }, context: any) {
      const { id } = args;
      console.log(`getProduct with id: ${id}`);
      return [{
        id,
        name: 'product',
      }];
    },
  },
};

export { product };
