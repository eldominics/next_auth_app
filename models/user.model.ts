import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  clerkId: { type: String, required: true },
});

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
