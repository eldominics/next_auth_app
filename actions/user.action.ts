"use server";

import UserModel from "@/models/user.model";

export async function createUser(userParams: CreateUserParams) {
  try {
    await UserModel.create(userParams);
  } catch (error) {
    console.log(error);
  }
}
