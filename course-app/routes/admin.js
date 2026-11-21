const { Router } = require('express');
const adminRouter = Router();

const {adminModel} = require('../db')

const JWT_ADMIN_PASSWORD="wefrt"

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

adminRouter.post('/signin',async function (req,res)
{
   const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email: email,
  });

  if (!admin) {
    return res.status(403).json({
      message: "User does not exist",
    });
  }

  // Compare the plaintext password with the hashed password in DB
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
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