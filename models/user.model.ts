import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  clerkId: { type: String, required: true },
  picture: { type: String },
});

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
