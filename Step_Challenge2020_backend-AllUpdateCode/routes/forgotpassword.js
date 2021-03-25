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

router.post('/', function(req, res){
    var data = {
        
      "Email":req.body.email,
        }
        
     pool.query("SELECT * from User_Table where Email = ?",
     data.Email, function(error,results,fields){
        console.log(req)
        if(error){
            console.log(error)
            res.send({
                "code":400,
            "Status":"error ocurred"
            })
          }
        else if(results.length == 0){
            console.log("no results")
            
            res.send({
                "code": 210,
                "Status" : "Email Not recognized"
            })
        }
        else{
            const token = Crypto.randomBytes(30).toString('hex')
            var tokenexpires = new Date()
            //console.log(connection.escape(tokenexpires))
            var t = req.body.email
            var sql = "Update User_Table SET resetPasswordToken = ?, resetPasswordTokenExpires = ? Where Email = ?"
            pool.query(sql,[token,tokenexpires,t],function(error,result,fields){
                if(error){
                    console.log(error)
                    res.send({
                        "code":400,
                    "failed":"error ocurred"
                    })
                }
                else{
                    var transporter = mailer.createTransport({
                        service: 'gmail',
                        auth: {
                          user: 'stepchallengeapp2020@gmail.com',
                          pass: 'Bindu12345'
                        }
                    });
                      var mailOptions = {
                        from: 'stepchallengeapp2020@gmail.com',
                        to: req.body.email,
                        subject: 'Link To Reset Password',
                        text:'You are recieving this email because you have requested to reset the password.\n'
                        +'Please click the below link\n\n'+
                        'http://localhost:3000/ResetPassword/'+token







                      };
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                      });


                      res.send({
                
                        "code":200,
                            "success":"Email Sent Successfully"
                    });

                }
            })
            
        }
     })

})



module.exports = router;