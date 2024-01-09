import mongoose from 'mongoose';

import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
   fullName: { type: String, required: true },

  },
  {
    timestamps: true,
  }
);
const User = model("User", userSchema);
export default User;

