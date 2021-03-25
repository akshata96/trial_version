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
    var data = {
        "First_Name":req.body.user.firstname,
      "Last_Name":req.body.user.lastname,
      "Email":req.body.user.email,
       "Password":req.body.user.password
    
        }
        const SALT_ROUND = 12
      let hashedPassword = bcrypt.hashSync(data.Password,SALT_ROUND)
      pool.query("SELECT COUNT(*) As total from User_Table where Email = ?",
      data.Email, function(error,results,fields){
          if(error){
            console.log(error)
            res.send({
                "code":400,
            "Status":"error ocurred"
            })
          }
          else if(results[0].total>0){
              res.send({
                  "code" : 210,
                  "Status" : "Email Already exists"
              })
          }
          else {
            const token = Crypto.randomBytes(30).toString('hex')
            var tokenexpires = new Date()
           // console.log(connection.escape(tokenexpires))
            
              data.Password = hashedPassword
              var sql = "INSERT INTO User_Table (First_Name, Last_Name, Email, Password, resetPasswordToken, resetPasswordTokenExpires) values (?, ?, ?, ?, ?, ?)"
              pool.query(sql,[data.First_Name, data.Last_Name, data.Email, data.Password, token, tokenexpires] , function(error,results,fields){
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
                        to: req.body.user.email,
                        subject: 'Link To activate account',
                        text: 'You are recieving this email because you have requested to create an account.\n'
                        +'Please click the below link\n\n'+
                        'http://localhost:3000/ConfirmEmail/'+token
                      };
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                      });
                    console.log("fv");
            res.send({
                
                "code":200,
                    "success":"user registered sucessfully"
            });
            
                }
            
            
            
            })

          }
      })
})


module.exports = router;