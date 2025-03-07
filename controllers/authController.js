import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { uname, email, password, mobile, address, answer } = req.body;

    //apply some validations here
    if (!uname) {
      return res.send({
        message: "Name is required",
      });
    }
    if (!email) {
      return res.send({
        message: "email is required",
      });
    }
    if (!password) {
      return res.send({
        message: "Password is required",
      });
    }
    if (!mobile) {
      return res.send({
        message: "Mobile is required",
      });
    }
    if (!address) {
      return res.send({
        message: "Address is required",
      });
    }
    if (!answer) {
      return res.send({
        message: "Answer is required",
      });
    }

    //check the existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User is already exist, Please login",
      });
    }

    //before post the data we convert the password into hash
    const hashedPassword = await hashPassword(password);

    //If not existing user then save the user
    const user = await new userModel({
      uname,
      email,
      password: hashedPassword,
      mobile,
      address,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Error in user register",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email not registered",
      });
    }

    //match the user entered password with database password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid password",
      });
    }

    //JWT token ---> study
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.uname,
        email: user.email,
        mobile: user.mobile,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//forgot password code
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    // Validate input fields
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!answer) {
      return res.status(400).send({ message: "Answer is required" });
    }
    if (!newPassword) {
      return res.status(400).send({ message: "Password is required" });
    }

    // Check if user exists with the given email and answer
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Wrong email or answer",
      });
    }

    // Hash new password
    const hashedPassword = await hashPassword(newPassword);

    // Update user password
    await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

    res.status(200).send({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// testcontrooler
export const testController = (req, res) => {
  res.send("Protected middleware accessed");
};
