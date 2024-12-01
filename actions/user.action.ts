"use server";

import { connectDB } from "@/lib/mongoose";
import UserModel from "@/models/user.model";

export async function createUser(userParams: CreateUserParams) {
  try {
    await connectDB();
    const newUser = await UserModel.create(userParams);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
