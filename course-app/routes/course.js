const express = require('express')
const Router = express.Router;

const courseRouter = Router()

courseRouter.post('/course/purchase', function (req,res)
{
  
})

courseRouter.get('/courses', function (req,res)
{
  
})

module.exports = {
  courseRouter : courseRouter
}