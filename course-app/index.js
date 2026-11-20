const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/user", userRouter);
app.use("/api/course", courseRouter);
app.use("/api/admin", adminRouter);

async function main() {
  await mongoose.connect("mongodb+url_kuch+bhi");
  app.listen(3000);
}


main();
