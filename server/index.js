require("dotenv").config({ path: "../.env" });
const express = require ('express');
const userRouter = require("./routes/users");
const mysql = require("mysql");

const app = express();

//MiddleWare

// app.use(passport.initialize());
// app.use(passport.session());


// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

const db = mysql.createPool({
  host     : '32.27.177.164',
  user     : 'root',
  password : '/5NXS-LDMySlpuXI',
  database : 'parker_db'
});

// db.connect(function(err) {              
//   if(err) {                                    
//     console.log('error when connecting to db:', err);
//   }                                     
// });
const email = "email@test.com";
const password = "password";
const IsManager = true;
const test = "INSERT INTO User (email, password, isManager) VALUES ('email@test.com', 'password', 'true')";

//test but timed out error thrown on connection for me
db.getConnection(function(err, connection) 
{
    if (err) 
    {
         console.log("Connection ERROR")
         console.log(err);
    }
    else 
    {
      connection.query(test, [email, password, IsManager], function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("successfully inserted");
        }})
    }
});

// Routes
app.use("/user", userRouter);

app.listen(process.env.DB_PORT, () => {
  console.log(`Server started on port ${process.env.DB_PORT}`);
});