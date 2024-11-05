import { once } from 'events';
import http from 'http';
import { createServer as CreateGraphQLServer } from './graphql/server';
import { app } from './http-server';
import { prisma } from './utils/prisma';

console.log('process.env:', process.env);

async function setup() {
  await Promise.all([
    // connect sql
    prisma
      .$connect()
      .then(() => console.log('prisma connected')),
  ]);

  const PORT = process.env.HTTP_PORT || 4000;
  const server = http.createServer(app);

  const graphqlServer = CreateGraphQLServer(server);
  await graphqlServer.start();

  graphqlServer.applyMiddleware({ app: app as any, path: '/graphql' });
  server.listen(PORT);

  await once(server, 'listening');
  console.log(`server listening on ${PORT}`);

  return server;
}

export { setup };
