import { makeExecutableSchema } from '@graphql-tools/schema';
import {
  ApolloServer,
  gql,
} from 'apollo-server-express';

import * as models from './models';
import * as mutations from './mutations';
import * as queries from './queries';
import * as scalars from './scalars';
import * as subscriptions from './subscriptions';

const typeDefs = gql`

  ${scalars.typeDefs}

  ${models.typeDefs}

  type Query ${queries.typeDefs}

  type Mutation ${mutations.typeDefs}

  type Subscription ${subscriptions.typeDefs}
`;

const resolvers = {
  ...scalars.resolvers,

  ...models.resolvers,

  Query: { ...queries.resolvers },
  Mutation: { ...mutations.resolvers },
  Subscription: { ...subscriptions.resolvers },
};

// @ts-ignore
function context({ req }) {
  const { user } = req ?? {};
  return {
    user,
    req,
  };
}

function createServer(httpServer: any) {
  let schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    context,
    introspection: true,
    cache: 'bounded',
  });

  const _applyMiddleware = server.applyMiddleware;
  server.applyMiddleware = function ({ app }) {
    // check for active maintenance windows
    app.use(async (req, res, next) => {
      // all request will be passed through this middleware
      next();
    });
    // @ts-ignore
    app.use((err, req, res, next) => {
      const url = req.originalUrl;
      if (url.includes('graphql')) {
        res.json({
          errors: [
            {
              message: 'API Server error',
              extensions: { code: 'SERVER_ERROR' },
            },
          ],
        });
      }
      next(err);
    });
    // @ts-ignore
    return _applyMiddleware.apply(this, arguments);
  };

  return server;
}

export { context, createServer, resolvers, typeDefs };
