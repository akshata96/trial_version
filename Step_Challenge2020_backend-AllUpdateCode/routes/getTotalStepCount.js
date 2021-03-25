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

router.get('/',function(req,res){
    var data = {
        user_id : req.query.user_id,
        Challenge_ID : req.query.Challenge_ID
    }
    var totalStepCount = 0
    var MonthlyGoal = 0
    pool.query("SELECT * from Steps_Table where Steps_User_fk_ID = ? and Steps_Challenge_fk_ID = ?",
    [data.user_id,data.Challenge_ID],function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "Status":"Error Occured"
            })
        }
        else{
            
            pool.query("Select * from Enrolls_in where Enrolls_User_fk_ID = ? and Enrolls_Challenge_fk_ID = ?",
            [data.user_id,data.Challenge_ID],function(error,rows,fields){
                if(error){
                    res.send({
                        "code":400,
                        "Status":"Error Occured"
                    })
                }
                else if(rows.length > 0) {
                    MonthlyGoal = rows[0].Monthly_Goal
                    console.log("fdfd"+MonthlyGoal)
                    // for(x in results){
                    //     totalStepCount = totalStepCount + results[x].Steps  
                    // }
                    // res.send({
                    //     "code" : 200,
                    //     "Status":"Successfully retrieved",
                    //     "totalStepCount" :totalStepCount,
                    //     "user_id" : data.user_id,
                    //     "Challenge_ID" : data.Challenge_ID,
                    //     "MonthlyGoal": rows[0].Monthly_Goal
                    // })
                }
                for(x in results){
                    totalStepCount = totalStepCount + results[x].Steps  
                }
                res.send({
                    "code" : 200,
                    "Status":"Successfully retrieved",
                    "totalStepCount" :totalStepCount,
                    "user_id" : data.user_id,
                    "Challenge_ID" : data.Challenge_ID,
                    "MonthlyGoal": MonthlyGoal
                })
            })
            
            
            
        }
    })
})


module.exports = router;