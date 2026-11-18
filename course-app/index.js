const express = require('express')
const {userRouter} = require('./router/user')
const app = express()

app.use("/user",userRouter())




app.listen(3000)