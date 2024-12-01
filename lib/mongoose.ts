import mongoose from "mongoose";

let isConnected: boolean = false;
export async function connectDB() {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("problem with MOngodb connection string");
  }
  if (isConnected) {
    return console.log("Database connected already");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL!, {
      dbName: "Next_Auth_App",
    });

    isConnected = true;
  } catch (error) {
    console.log(error);
  }
}
