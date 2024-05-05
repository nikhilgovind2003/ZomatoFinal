import mongoose from "mongoose";

export default async () => {
  return mongoose.connect(process.env.MONGO_URL, () => {
    console.log("mongodb connected successfully...");
  });
};
