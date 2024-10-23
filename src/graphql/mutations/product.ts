import {
  gql,
} from 'apollo-server-express';

const product = {
  typeDefs: gql`
    extend type Mutation {
      createProduct(
        input: ProductInput
      ): Product!
    }

    input ProductInput {
      id: String
      name: String
    }
  `,

  resolvers: {
    async createProduct(_parent: any, args: { input: any; }, context: any) {
      let {
        input,
      } = args;
      console.log('input:', input);

      return {
        id: '1',
        name: 'product',
      }
    },
  },
};

export { product };
