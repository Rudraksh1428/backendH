const { Router } = require('express');
const adminRouter = Router();

const {adminModel} = require('../db')

adminRouter.post('/signup',async function (req,res)
{
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
    await adminModel.create({
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
})

adminRouter.post('/signin', function (req,res)
{
  
})

adminRouter.post('/course', function (req,res)
{
  
})

adminRouter.put('/course', function (req,res)
{
  
})

adminRouter.get('/course/bulk', function (req,res)
{
  
})

module.exports = {
adminRouter : adminRouter
}