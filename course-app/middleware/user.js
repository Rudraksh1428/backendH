const jwt = require('jsonwebtoken')
const {JWT_USER_PASSWORD} = require ("../config")

function userMiddleware(req,res,next){
const token = req.headers.token;
const deocded = jwt.verify(token,JWT_USER_PASSWORD)

if(decode)
{
  req.userId  = deocded.indexOf;
  next();
}else {
  res.status(403).json({
    message : "not signed in"
  })
}
}

module.exports={
  userMiddleware : userMiddleware
}