import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String!
    dogs: [Dog!]!
  }

  type Dog {
    id: ID!
    name: String!
  }

  type Mutation {
    createDog(name: String!): Dog!
    deleteDog(id: ID!): String!
  }
`;

export default typeDefs;
