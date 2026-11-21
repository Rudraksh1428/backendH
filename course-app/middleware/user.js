const jwt = require('jsonwebtoken')

function userMiddleware(req,res,next){
const token = req.headers.token;
const deocded = jwt.verify(token,)
}

module.exports={
  userMiddleware : userMiddleware
}