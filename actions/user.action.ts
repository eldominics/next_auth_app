"use server";

import UserModel from "@/models/user.model";

export async function createUser(userParams: CreateUserParams) {
  try {
    const newUser = await UserModel.create(userParams);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
