const { Router } = require('express');
const userRouter = Router();
const { z } = require("zod");

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

userRouter.post("/signup", function (req, res) {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      error: result.error,
    });
  }

  const { email, password, firstName, lastName } = req.body;

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