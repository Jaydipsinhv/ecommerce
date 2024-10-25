import { gql } from 'apollo-server-express';
import { GraphQLScalarType } from 'graphql';
import { Kind, ValueNode } from 'graphql/language';

const DateType = {
  typeDefs: gql`
    scalar Date
  `,

  resolvers: {
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue: (value: unknown) => {
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          value instanceof Date
        ) {
          return new Date(value); // value from the client
        }
        throw new TypeError(`Value is not a valid date: ${value}`);
      },
      serialize: (value: unknown) => {
        if (value instanceof Date) {
          return value.getTime(); // value sent to the client
        }
        throw new TypeError(`Value is not a valid Date object: ${value}`);
      },
      parseLiteral: (ast: ValueNode) => {
        if (ast.kind === Kind.INT) {
          return new Date(parseInt(ast.value, 10)); // Convert integer to Date
        }
        return null;
      },
    }),
  },
};

export { DateType };
