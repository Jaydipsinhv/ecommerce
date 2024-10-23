import { gql } from 'apollo-server-express';

import { ProductType as Product } from './Product';

const models: { [key: string]: any } = {
  Product,
};

const typeDefs = gql`
  ${Product.typeDefs}
`;

const resolvers = {};
for (const key in models) {
  Object.assign(resolvers, models[key].resolvers);
}

export { models, resolvers, typeDefs };
