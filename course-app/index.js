const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const {adminRouter} = require('./routes/admin');

const app = express();

app.use('/api/user', userRouter);
app.use('/api/course', courseRouter);
app.use('/api/admin', adminRouter);
app.listen(3000);