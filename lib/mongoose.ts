import mongoose from "mongoose";

const isConnected: boolean = false;
export async function connectDB() {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("Problem with mongodb connection string");
  }
  if (isConnected) {
    return console.log("Connected to database already");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL!, {
      dbName: "AppUser",
    });
  } catch (error) {
    console.log(error);
  }
}
