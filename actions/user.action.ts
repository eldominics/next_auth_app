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

export async function updateUser(updateUser: UpdateParams) {
  try {
    connectDB();
    const { clerkId, username, email } = updateUser;

    await UserModel.findByIdAndUpdate(
      { clerkId },
      { username, email },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(deleteUserParams: DeleteParams) {
  try {
    connectDB();
    const { clerkId } = deleteUserParams;
    const deletedUser = await UserModel.findOneAndDelete({ clerkId });
    if (!deletedUser) {
      throw new Error("user does not exist");
    }
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
}
