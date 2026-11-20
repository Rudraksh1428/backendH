const { Router } = require('express');
const userRouter = Router();
const {userModel} = require ("../db")
const { z } = require("zod");
const bcrypt = require("bcrypt");

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

userRouter.post('/signin', function (req,res)
{
  
})

userRouter.get('/purchases', function (req,res)
{
  
})

module.exports = {
  userRouter : userRouter
}