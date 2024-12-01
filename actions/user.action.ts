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

export async function deleteUser(deleteParams: DeleteUserParams) {
  try {
    await connectDB();
    const { clerkId } = deleteParams;
    const deletedUser = await UserModel.findOneAndDelete({ clerkId });
    if (!deletedUser) {
      throw new Error("user does not exist");
    }

    return deleteUser;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(updateParams: UpdateUserParams) {
  try {
    await connectDB();
    const { clerkId, email, username, picture } = updateParams;
    await UserModel.findOneAndUpdate(
      { clerkId },
      { $set: { email, username, picture } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
}
