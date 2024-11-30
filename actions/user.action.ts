"use server";

import { connectDB } from "@/lib/mongoose";
import UserModel from "@/models/user.model";

export async function createUser(userParams: CreateUserParams) {
  try {
    connectDB();
    const userDB = await UserModel.create(userParams);
    return userDB;
  } catch (error) {
    console.log(error);
  }
}
