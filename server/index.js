require("dotenv").config({ path: "../.env" });
const express = require ('express');
const userRouter = require("./routes/users");

const app = express();

// Routes
app.use("/user", userRouter);

app.listen(process.env.DB_PORT, () => {
  console.log(`Server started on port ${process.env.DB_PORT}`);
});