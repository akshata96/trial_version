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

router.post('/', function(req,res){
    console.log(req.body)
    var useremail = req.body.user.email;

    pool.query("SELECT * from User_Table WHERE Email=?",[useremail],
    function(error,results,fields){

        if(error){
            console.log("failed");
            res.send({
                "code":400,
        "failed":"error ocurred"
            });
        }
        else{
            if(results.length>0){
                //console.log(results)
                let b = bcrypt.compareSync(req.body.user.password,results[0].Password)
                if(b){
                    console.log("success");
                    res.send({
                        "code":200,
                        "success":"login sucessful",
                        results

                    })
                }
                else{
                    console.log("does not match");
                    res.send({
                        "code":204,
                        "success":"Email and password does not match"
                    })
                }
            }
            else{
                console.log("does not exist");
                res.send({
                    "code":206,
                    "success":"Email does not exists"
                      });
            }


        }


    })
})


module.exports = router;