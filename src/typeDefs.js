
//Imports the gql tag in order to build my grapql schema
import { gql } from "apollo-server";

const typeDefs = gql`
#Defining the root query
  type Query {
    hello: String!
    dogs: [Dog!]!
  }
  #Defining my Dog type
  type Dog {
    id: ID!
    name: String!
  }
#Defining the mutations
  type Mutation {
    createDog(name: String!): Dog!
    deleteDog(id: ID!): String!
  }
`;

export default typeDefs;
