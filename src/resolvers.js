//Importing the dog model
import { Dog } from "./models/dog";
//defining my resolvers for queries and mutations
export const resolvers = {
  Query: {
    hello: () => "Hello World!!",
    dogs: async () => {
      return await Dog.find();
    },
  },
  Mutation: {
    createDog: async (_, { name }) => {
      const puppy = new Dog({ name });
      await puppy.save();
      return puppy;
    },
    deleteDog: async (_, { id }) => {
      if (!id) return "No id has been provided";
      const dog = await Dog.findById(id);
      if (dog) {
        await Dog.deleteOne({ _id: id });
        return "Dog deleted successfully";
      } else {
        return "Dog not found";
      }
    },
  },
};
