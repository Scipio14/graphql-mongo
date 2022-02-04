//Import the Schema and the model from mongoose to create the dogSchema
import { Schema, model } from "mongoose";

//We define the types for each field
const dogSchema = new Schema({
  name: String,
});

//We export the Dog Model and we give it the name Dog and we tell to use the dogSchema
export const Dog = model("Dog", dogSchema);
