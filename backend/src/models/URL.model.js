import mongoose, { Schema } from "mongoose";

const URLSchema = new Schema({
  longURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
    unique: true,
  },
  history: [Date],
});

export const URL = mongoose.model("URL", URLSchema);
