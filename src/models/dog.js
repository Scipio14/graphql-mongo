import { Schema, model } from "mongoose";

const dogSchema = new Schema({
  name: String,
});

export const Dog = model("Dog", dogSchema);
