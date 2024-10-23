import { gql } from 'apollo-server-express';

import { product } from './product';

const queries: { [key: string]: any } = {
product,
};

const typeDefs = gql`
${product.typeDefs}
`;

const resolvers = {};
for (const key in queries) {
  Object.assign(resolvers, queries[key].resolvers);
}

export { queries, resolvers, typeDefs };
