require("dotenv").config({ path: "../.env" });
const express = require ('express');
const userRouter = require("./routes/users");

const app = express();

//MiddleWare

// app.use(passport.initialize());
// app.use(passport.session());


// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Routes
app.use("/user", userRouter);

app.listen(process.env.DB_PORT, () => {
  console.log(`Server started on port ${process.env.DB_PORT}`);
});