//Import dependencies
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import { resolvers } from "./resolvers";
import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 666;

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("Mongodb Connected");
  }
);

//Creating the server and creating the schema on separate files
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Listening the server at port 666
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
