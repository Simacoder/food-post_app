//our dependencies 
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// running the server

app.listen(3003, ()=>{
    console.log('Server is running on port 3003')
})

// creates the database 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',// no password to be used
    database: 'foodpostdb',
})

// create a routes to the server for a register

app.post('/register', (req, res)=>{
    const sentEmail = req.body.Email
    const sentUserName = req.body.sentUserName
    const sentPassword = req.body.Password

    // SQl Statements
    const  SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'
    // Enter values 
    const Values =[sentEmail, sentUserName, sentPassword]

    // Queries to execute the SQL statement 
    db.query(SQL, Values, (err, results) =>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!!!')
            res.send({message: 'User added!!!'})
        }
    })

})

// create another route for login 

app.post('/login', (req, res)=>{
    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    // SQl Statements
    const  SQL = 'SELECT * FROM  users WHERE username = ? && password'
    // Enter values 
    const Values =[sentLoginUserName, sentLoginPassword]

    // Queries to execute the SQL statement 
    db.query(SQL, Values, (err, results) =>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: 'Credentials does not match!!!'})
            
        }
    })

})