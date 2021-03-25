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
        "Email":req.query.Email,
        "Team_Challenge_fk_ID":req.query.Challenge_ID
    }
    console.log(req.query)
    var sqlo = "select * from(select Email,User_ID from step_db.User_Table where User_ID not in(select TM_User_fk_ID from step_db.Team_Members_table , step_db.Teams_Table where TM_Team_fk_ID = Team_ID and Team_Challenge_fk_ID = ? )) b where Email LIKE ?"
    pool.query(sqlo,[data.Team_Challenge_fk_ID,'%'+data.Email+'%'],function(error,results,fields){
        if(error){
            console.log(error)
            res.send({
                "code":200,
                "Status":"Error Occured"
            })
        }
        else{
            console.log(results)
            if(results.length >0){
                console.log(results)
                res.send({
                    "code":200,
                    "Status":"Retrieved Successfully",
                    results
                })
            }
            else {
                console.log("No results found")
                res.send({
                    "code":201,
                    "Status":"No records found"
                })
            }
        }
    })
    


})

module.exports = router;