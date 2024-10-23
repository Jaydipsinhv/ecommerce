import { gql } from 'apollo-server-express';

const ProductType = {
  typeDefs: gql`
    type Product {
      id: ID!

      status: ProductStatus!
      description: String
      price: Float
      stock: Int

      """
      Timestamp of record creation.
      """
      createdAt: Date!
      """
      Timestamp of last record update.
      """
      updatedAt: Date!
    }

    enum ProductStatus {
      active
      inactive
    }
  `,

  resolvers: {
    Product: {
      createdAt: (record: { createdAt: any; created_at: any; }) => record.createdAt || record.created_at,
      updatedAt: (record: { updatedAt: any; updated_at: any; }) => record.updatedAt || record.updated_at,
    },
  },
};

export { ProductType };
