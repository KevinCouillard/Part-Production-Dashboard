const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");
const Product = require("../models/product");
const Safety = require("../models/safety");
const Tracking = require("../models/tracking");
// const passport = require("passport");
const Validate = require("./validate");


//Logs the user into an account
userRouter.post("/login", async (req, res) => {});

//Creates an employee user account
userRouter.post("/createAccount", async (req, res) => {});

//Logs a user out of an account
userRouter.post("/:userId/logout", async (req, res) => {
  req.logout();
  res.send({ message: "Successfully logged out" });
});

//Gets all user accounts in the system
userRouter.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Stores a tracking entry in the database
userRouter.post("/tracking", async (req, res) => {
  const newTracking = new Tracking({
    operator: "Bob",
    area: 1,
    shift: 3,
    date_tracked: "10/12/21",
  });
  const Trackings = await newTracking.save({});
  res.status(200).json(Trackings);
});

//Stores a safety report entry in the database
userRouter.post("/safety", async (req, res) => {
  const newSafety = new Safety({
    type: "Safe",
    area: "Production",
    incident_date: "12/11/22",
  });
  const safety = await newSafety.save({});
  res.status(200).json(safety);
});

//Stores a new product in the database
userRouter.post("/products", async (req, res) => {});

//Returns all tracking entries in the database (with filter)
userRouter.get("/tracking/:date/:area/:shift/:operator", async (req, res) => {
  const Trackings = await Tracking.find({});
  res.status(200).json(Trackings);
});

//Returns all safety report entries in the database (with filter)
userRouter.get("/safety/:type/:area/:date", async (req, res) => {
  const safety = await Safety.find({});
  res.status(200).json(safety);
});

//Returns all the products in the database or one by id
userRouter.get("/products/:id", async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

//Returns all good products in the system (with filter) *Will probably change to rework*
userRouter.get(
  "/products/:id/good/:tracking/:date/:area:/shift/:operator",
  async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  }
);


//Returns all bad products in the system (with filter) *Will probably change to rework*
userRouter.get(
  "/products/:id/bad/:tracking/:date/:area:/shift/:operator",
  async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  }
);

//Returns all finished products in the database (with filter)
userRouter.get(
  "/products/:id/finished/:tracking/:date/:area:/shift/:operator",

  async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  }
);

//Returns target amounts for all products or one by id in the database (with filter)
userRouter.get(
  "/products/:id/target/:tracking/:date/:area:/shift/:operator",

  async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  }
);

//Returns actual product amounts in the database (with filter)
userRouter.get(
  "/products/:id/actual/:tracking/:date/:area:/shift/:operator",

  async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  }
);


module.exports = userRouter;
