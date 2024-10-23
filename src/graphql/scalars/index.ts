import { gql } from 'apollo-server-express';

const scalars: { [key: string]: any } = {};

const typeDefs = gql``;

const resolvers = {};
for (const key in scalars) {
  Object.assign(resolvers, scalars[key].resolvers);
}

export { resolvers, scalars, typeDefs };
