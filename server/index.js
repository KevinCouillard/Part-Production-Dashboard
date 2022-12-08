require("dotenv").config({ path: "../.env" });
const express = require ('express');
const userRouter = require("./routes/users");
const mysql = require("mysql2");

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
  database : 'parker_db',
  connectTimeout: 900000
  //socketPath: "custom-oasis-361217:us-central1:db325-instance"
});


// const db = mysql.createConnection({
//   host     : '32.27.177.164',
//   user     : 'root',
//   password : '/5NXS-LDMySlpuXI',
//   database : 'parker_db',
//   port     : 3306,
//   connectionLimit: 20,
//   connectTimeout: 50000
// });

// db.connect((err) => {              
//   if(err) {                                    
//     throw err;
//   }           
//   console.log("MySQL Connected")                          
// });

// const email = "email@test.com";
// const password = "password";
// const IsManager = true;
// const test = "INSERT INTO User (email, password, isManager) VALUES ('email@test.com', 'password', 'true')";

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



const app = express();

// Routes
app.use("/user", userRouter);

app.listen(process.env.DB_PORT, () => {
  console.log(`Server started on port ${process.env.DB_PORT}`);
});

//db.end();
// console.log("Connection ended");