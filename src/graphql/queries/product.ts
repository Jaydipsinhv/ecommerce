import { gql } from 'apollo-server-express';

const product = {
  typeDefs: gql`
    extend type Query {
      getProducts(id: ID!): Product! @auth
    }
  `,

  resolvers: {
    async getProducts(_parent: any, args: { input: any; }, context: any) {
      return [{
        id: '1',
        name: 'product',
      }];
    },
  },
};

export { product };
