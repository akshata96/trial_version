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

router.get("/",function(req,res){
    var data = {
        "User_ID":req.query.user_id,
        "challengeID":req.query.challengeID,
    }
    var DailyGoal = 0
    var DailySteps = 0
    var sql = "SELECT * FROM step_db.Steps_Table where Steps_User_fk_ID = ? and Steps_Challenge_fk_ID = ? and Steps_Date  = { fn CURDATE() }"
    pool.query(sql,[data.User_ID,data.challengeID],function(error,results,fields){
        if(error){
            console.log(error);
            res.send({
                "code":400,
                "Status":"Error Occured"
            })
            
        }
        else if(results.length>0){
            pool.query("Select * from Enrolls_in where Enrolls_User_fk_ID = ? and Enrolls_Challenge_fk_ID = ?",
            [data.User_ID,data.challengeID],function(error,rows,fields){
                if(error){
                    res.send({
                        "code":400,
                        "Status":"Error Occured"
                    })
                }
                else if (rows.length>0){
                    DailyGoal = rows[0].Daily_Goal
                    console.log(rows[0].Daily_Goal)
                    for(x in results){
                        DailySteps = DailySteps + results[x].Steps  
                    }
                    res.send({
                        "code" : 200,
                        "Status":"Successfully retrieved",
                        "DailyStepCount" :DailySteps,
                        "user_id" : data.User_ID,
                        "Challenge_ID" : data.challengeID,
                        "DailyGoal": rows[0].Daily_Goal
                    })

                }
            })
            
            
        }
        else {
            res.send({
                "code":201,
                "Status": "No records found",
                "user_id" : data.User_ID,
                "Challenge_ID" : data.challengeID,
                "DailyStepCount" :0,
                "DailyGoal": DailyGoal
            })
        }
    })
    console.log(req.query)
})


module.exports = router;