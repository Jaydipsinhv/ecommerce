import { gql } from 'apollo-server-express';

import { product } from './product';

const mutations: { [key: string]: any } = {
  product,
};

const typeDefs = gql`
  ${product.typeDefs}
`;

const resolvers = {};
for (const key in mutations) {
  Object.assign(resolvers, mutations[key].resolvers);
}

export { mutations, resolvers, typeDefs };
