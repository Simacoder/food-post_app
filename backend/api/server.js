const express = require("express")
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

  server.listen(8088, function check(error) {
    if (error) 
    {
    console.log("Error....!!!!");
    }

    else 
    {
        console.log("Started....!!!! 8088");

    }
});

//Create the Records

server.post("/api/requestdb/add", (req, res) => {
    var details = [
      req.body.stname,
      req.body.meal,
      req.body.fee
    ];
    var sql = "INSERT INTO requestdb (stname, meal, fee) VALUES ('lEBO', 'Uncoked', 79)";
  db.query(sql, function (err, details) {
    if (err) throw err;
    console.log("1 record inserted");
    });
  });



//view the Records

server.get("/api/requestdb", (req, res) => {
    var sql = "SELECT * FROM requestdb";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });


//Search the Records

server.get("/api/requestdb/:id", (req, res) => {
    var foodid = req.params.id;
    var sql = "SELECT * FROM requestdb WHERE id=" + foodid;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });



//Update the Records

server.put("/api/requestdb/update/:id", (req, res) => {
    let sql =
      "UPDATE requestdb SET stname='" +
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

  server.delete("/api/requestdb/delete/:id", (req, res) => {
    let sql = "DELETE FROM requestdb WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Food Deleted Failed" });
      } else {
        res.send({ status: true, message: "Food Deleted successfully" });
      }
    });
  });