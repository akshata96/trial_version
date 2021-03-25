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

router.get('/', function(req, res){

    pool.query("SELECT * from User_Table where User_ID=7", function(error,rows,fields){

        if(error){
            console.log(error);
            res.send({
                "code":400,
        "failed":"error ocurred"
            });
        }
        else{
            console.log(rows);
            res.send(
                rows)
        }

    })

})


module.exports = router;
