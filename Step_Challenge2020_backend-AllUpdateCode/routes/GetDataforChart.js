



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
        challenge_id : req.query.challenge_id
    }
    var ret = []
    var sq = "SELECT Steps_Date, sum(Steps) as CountOnDay FROM step_db.Steps_Table where Steps_User_fk_ID = ? and Steps_Challenge_fk_ID = ? group by date(Steps_Date);"
    pool.query(sq,[data.user_id,data.challenge_id],function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "Status":"Error Occured"
            })
        }
        else if(results.length > 0){
            console.log(results)
            for(x in results){
                //console.log(results)
                z = results[x].Steps_Date.toISOString().
                replace(/T/, ' ').      
                replace(/\..+/, '').split(" ") 
               // console.log(z[0])
                y = moment(z[0]).format("MMM D YYYY")
                //console.log(y)
                results[x].Steps_Date = y
            }
            res.send({
                "code":200,
                "Status":"Successfully retrieved",
                results
            })
        }
        else{
            res.send({
                "code":220,
                "Status":"No records found"
            })
        }



    })
})


module.exports = router;