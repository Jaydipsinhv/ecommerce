import { gql } from 'apollo-server-express';

import { DateType } from './Date';

const scalars: { [key: string]: any } = {
  Date: DateType,
};

const typeDefs = gql`
  ${DateType.typeDefs}
`;

const resolvers = {};
for (const key in scalars) {
  Object.assign(resolvers, scalars[key].resolvers);
}

export { resolvers, scalars, typeDefs };
