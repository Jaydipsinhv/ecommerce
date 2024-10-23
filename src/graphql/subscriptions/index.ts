import { gql } from 'apollo-server-express';


const subscriptions: { [key: string]: any } = {};

const typeDefs = gql``;

const resolvers = {};
for (const key in subscriptions) {
  Object.assign(resolvers, subscriptions[key].resolvers);
}

export { resolvers, subscriptions, typeDefs };
