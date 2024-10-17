import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schemas';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
