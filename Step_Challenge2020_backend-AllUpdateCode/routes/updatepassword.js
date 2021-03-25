const express = require('express');
const mysql = require("mysql");
const app = express();
var bcrypt = require("bcrypt")
var bodyParser = require('body-parser');
var path = require('path');
var mailer = require("nodemailer");
var Crypto = require('crypto')
var moment = require('moment')
var router = express.Router();


var pool = mysql.createPool({
    host:'stark.cse.buffalo.edu',
    port:3306,
    user:'steps_user',
    database:'step_db',
    password:'ChangeMe!'
})

router.put('/', function(req,res){
    var data = {
       
      "Email":req.body.email,
       "Password":req.body.password
    
        }
        const SALT_ROUND = 12
      let hashedPassword = bcrypt.hashSync(data.Password,SALT_ROUND)
        pool.query("Update User_Table SET Password = ? Where Email = ?",
        [hashedPassword,data.Email],function(error,results,fields){
            console.log(hashedPassword)
            console.log(req.body.password)
            if(error){
                console.log(error);
                res.send({
                    "code":400,
                    "Status":"error occured",
                })
            }
            else{
                res.send({
                    "code":200,
                    "Status" : "Password updated successfully",
                })
            }
        })

})

module.exports = router;