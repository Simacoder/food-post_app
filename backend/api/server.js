const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());


//Establish the database connection

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "dbsmfoods",

});

db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      console.log("Successfully Connected to DB");
    }
  });

//Establish the Port

  server.listen(8085,function check(error) {
    if (error) 
    {
    console.log("Error....!!!!");
    }

    else 
    {
        console.log("Started....!!!! 8085");

    }
});

//Create the Records

server.post("/api/food/add", (req, res) => {
    let details = {
      stname: req.body.stname,
      meal: req.body.meal,
      fee: req.body.fee,
    };
    let sql = "INSERT INTO food SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "Food created Failed" });
      } else {
        res.send({ status: true, message: "Food created successfully" });
      }
    });
  });



//view the Records

server.get("/api/food", (req, res) => {
    var sql = "SELECT * FROM food";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });


//Search the Records

server.get("/api/food/:id", (req, res) => {
    var foodid = req.params.id;
    var sql = "SELECT * FROM food WHERE id=" + foodid;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });



//Update the Records

server.put("/api/food/update/:id", (req, res) => {
    let sql =
      "UPDATE food SET stname='" +
      req.body.stname +
      "', meal='" +
      req.body.meal +
      "',fee='" +
      req.body.fee +
      "'  WHERE id=" +
      req.params.id;
  
    let a = db.query(sql, (error, result) => {
      if (error) {
        res.send({ status: false, message: "Food Updated Failed" });
      } else {
        res.send({ status: true, message: "Food Updated successfully" });
      }
    });
  });



  //Delete the Records

  server.delete("/api/food/delete/:id", (req, res) => {
    let sql = "DELETE FROM food WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Food Deleted Failed" });
      } else {
        res.send({ status: true, message: "Food Deleted successfully" });
      }
    });
  });