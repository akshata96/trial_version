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
    console.log(req.body)
    var d = new Date().getFullYear()
    var enrolls = {
        "Enrolls_User_fk_ID": req.body.Data.user_id,
        "Enrolls_Challenge_fk_ID":req.body.Data.challenge_id,
        "Term_Enrolled" : d
    }
    var user_id = req.body.Data.user_id
    var data  = {
        "Address_Line1" :req.body.Data.AddressLine1,
        "Address_Line2" : req.body.Data.Address_Line2,
        "City" : req.body.Data.City,
        "State" :req.body.Data.State,
        "ZipCode" : req.body.Data.ZipCode,
        "Contact" : req.body.Data.Contact,
        "Affiliation" : req.body.Data.UBAffiliation
    }
    var sql = "Update User_Table SET Address_Line1 = ?,Address_Line2 = ?, City = ?, State = ?,ZipCode = ?, Contact = ?,Affiliation=? Where User_ID = ?"
    pool.query(sql,[data.Address_Line1,data.Address_Line2,data.City,data.State,data.ZipCode,data.Contact,data.Affiliation,user_id],
        function(error,results,fields){
            if(error){
                res.send({
                    "code":400,
                    "Status":"Error Occured"
                })
            }
            else{
                var s ="INSERT INTO Enrolls_in SET ?"
                pool.query(s,enrolls,function(error,results,fields){
                    if(error){
                        console.log(error)
                        res.send({
                            "code":400,
                            "Status" : "Error Occured"
                        })
                    }
                    else{
                        res.send({
                            "code":200,
                            "Status":"Updated Successfully"
                        })
                    }

                })
                
            }
        })

})




module.exports = router;