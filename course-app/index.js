const express = require('express')
const {userRouter} = require('./routes/user')
const app = express()
const {courseRouter} = require('./routes/course')

app.use("/user",userRouter())
app.use("/course",courseRouter())


app.listen(3000)