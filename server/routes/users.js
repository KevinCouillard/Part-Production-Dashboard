const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");
const Product = require("../models/product");
const Safety = require("../models/safety");
const Tracking = require("../models/tracking");
const Validate = require("./validate");

//Logs the user into an account
userRouter.post();


//Creates an employee user account
userRouter.post("/createAccount", async (req, res) => {});


//Logs a user out of an account
userRouter.post("/:userId/logout", async (req, res) => {
    req.logout();
    res.send({ message: "Successfully logged out" });
  });


//Gets all user accounts in the system
userRouter.get();


//Stores a tracking entry in the database
userRouter.post();


//Stores a safety report entry in the database
userRouter.post();


//Stores a new product in the database
userRouter.post();


//Returns all tracking entries in the database (with filter)
userRouter.get();


//Returns all safety report entries in the database (with filter)
userRouter.get();


//Returns all the products in the database or one by id
userRouter.get();


//Returns all good products in the system (with filter) *Will probably change to rework*
userRouter.get();


//Returns all bad products in the system (with filter) *Will probably change to rework*
userRouter.get();


//Returns all finished products in the database (with filter)
userRouter.get();


//Returns target amounts for all products or one by id in the database (with filter)
userRouter.get();


//Returns actual product amounts in the database (with filter)
userRouter.get();
