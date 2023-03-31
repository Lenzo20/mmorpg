import mongoose from "mongoose";

export async function mongoConect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mmorpg");
}
