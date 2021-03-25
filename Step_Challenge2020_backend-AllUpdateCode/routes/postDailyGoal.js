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



router.post("/",function(req,res){

    var data = {
        "Daily_Goal": req.body.data.DailyGoal,
        "Enrolls_User_fk_ID": req.body.data.user,
        "Enrolls_Challenge_fk_ID":req.body.data.challengeID
    }

    var sql1 = "Update step_db.Enrolls_in SET Daily_Goal = ? where Enrolls_User_fk_ID = ? and Enrolls_Challenge_fk_ID = ?"

    console.log(req.body)

    pool.query(sql1,[data.Daily_Goal,data.Enrolls_User_fk_ID,data.Enrolls_Challenge_fk_ID],function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "Status":"Error Occured"
            })
        }
        else {
            console.log("success")
            res.send({
                "code":200,
                "Status":"Successfully updated"
            })
        }
        
        
    })
})


module.exports = router;
