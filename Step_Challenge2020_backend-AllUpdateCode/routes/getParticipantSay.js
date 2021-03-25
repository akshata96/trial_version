


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


    var sl = "select Participant_Say, CONCAT(First_Name,' ',Last_Name) Full_Name, Profile_Picture from (select * from step_db.Merit_Participant_Say as M join step_db.User_Table as U on U.User_ID = M.User_ID_fk_Participant order by Term desc limit 3) as t;"

    pool.query(sl,"",function(error,rows,fields){
        if(error)
                {
                    res.send({
                        "code":400,
                        "Status":"Error Occured"
                    })
                }
                else{
                    console.log(rows)
                    res.send({
                        "Code" : 200,
                        "Status" : "getParticipantSay records retrieval successful",
                         rows
                    })
                }
    });
    

});


module.exports = router;