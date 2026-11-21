const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const { z } = require("zod");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

const {JWT_USER_PASSWORD}=require("../config")
const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

userRouter.post("/signup", async function (req, res) {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      error: result.error,
    });
  }

  const { email, password, firstName, lastName } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });

    res.json({
      message: "You are signed up",
    });
  } catch (e) {
    res.status(403).json({
      message: "User already exists",
    });
  }
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
  });

  if (!user) {
    return res.status(403).json({
      message: "User does not exist",
    });
  }

  // Compare the plaintext password with the hashed password in DB
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

userRouter.get("/purchases", function (req, res) {});

module.exports = {
  userRouter: userRouter,
};
