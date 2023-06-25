import bcrypt from "bcrypt";
import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  phoneNumber: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  isAdmin: {
    required: true,
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  resetPasswordToken: {
    type: String,
    required: false,
  },
  resetPasswordExpires: {
    type: Date,
    required: false,
  },
});

export const createUser = async (newUser) => {
  try {
    newUser.isAdmin = false;
    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    const createdUser = await UserModel.create({
      ...newUser,
      password: hashedPassword,
    });
    return createdUser;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Duplicate Error");
    }
  }
};

export const verifyPassword = async (email, password) => {
  const user = await UserModel.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    const userData = user.toObject();
    delete userData.password;
    return userData;
  } else {
    return null;
  }
};

userSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

export const UserModel = mongoose.model("User", userSchema);
