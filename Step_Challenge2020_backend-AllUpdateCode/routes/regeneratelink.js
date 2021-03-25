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

router.get('/', function(req, res)
{
    console.log(req)
    var data = {
        "Email": req.query.email_id
    }

    const token = Crypto.randomBytes(30).toString('hex')
            var tokenexpires = new Date()
            //console.log(connection.escape(tokenexpires))
            //var t = req.body.email
            var sql = "UPDATE User_Table SET resetPasswordToken = ?, resetPasswordTokenExpires = ? Where Email = ?"
            pool.query(sql,[token, tokenexpires, data.Email] , function(error,results,fields){
                console.log(req.body);
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
                        to: data.Email,
                        subject: 'Link To activate account',
                        text: 'You are recieving this email because you have requested to create an account.\n'
                        +'Please click the below link to activate your account.\n\n'+
                        'http://localhost:3000/ConfirmEmail/'+token
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
                    "success":"User registered sucessfully"
            });
            
                }
            
            
            
            })
    
})



module.exports = router;