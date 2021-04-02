
var db = require('./db');
const express = require('express')
const authJWT = require("./authJwt");
const keyConfig = require("./config/key.config");
var jwt = require("jsonwebtoken");
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 3200
var mailer = require("nodemailer");
var Crypto = require('crypto')
var moment = require('moment')
var bcrypt = require("bcrypt")
var bodyParser = require('body-parser');
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:3000'
  }
  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/user/login', function(request, response) {
    console.log(request.body)
    var EmailID = request.body.user.email;
    var password = request.body.user.password;
    console.log(EmailID,password)
    if (EmailID && password) {
// check if user exists
        db.conn.query('SELECT * FROM users WHERE EmailID = ? AND Pass = ?', [EmailID, password], function(error, results, fields) {
            if(error)
            {
                 console.log("failed");
                 response.send({
                  "code":400,
                  "failed":"error ocurred"
            });
            } 
            if (results.length > 0) {
                console.log(results[0].UserID);
                var token = jwt.sign({ id: results[0].UserID }, keyConfig.secret, {
                    expiresIn: 500 // 86400 - 24 hours
                  });
                 response.send({
                        "code":200,
                        "success":"login sucessful","token":token});
            } else 
            {
                response.send({
                    "code":204,
                    "success":'Incorrect EmailID and/or Password!'});
            }           
            response.end();
        });
    } 
    else {
        response.send({
            "code":210,
            "success":'Please Email ID does not Exist!'
            });
        response.end();
    }
});

app.post('/user/signup', function(req,res){
    console.log(req.body)
    var data = {
        "First_Name":req.body.user.firstname,
        "Last_Name":req.body.user.lastname,
        "EmailID":req.body.user.email,
        "Pass":req.body.user.password,
        "UserType":req.body.user.userType,
    }
      const SALT_ROUND = 12
      db.conn.query("SELECT COUNT(*) As total from users where EmailID = ?",
      data.EmailID, function(error,results,fields){
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
            console.log(db.conn.escape(tokenexpires))
            
              //data.Password = hashedPassword
              var sql = "INSERT INTO users (First_Name, Last_Name, EmailID, Pass, UserType ,resetPasswordToken, resetPasswordTokenExpires) values (?, ?, ?, ?, ?, ?, ?)"
              db.conn.query(sql,[data.First_Name, data.Last_Name, data.EmailID, data.Pass, data.UserType, token, tokenexpires] , function(error,results,fields){
                console.log(req.body);
                if(error){
                    console.log(error)
                    res.send({
                        "code":400,
                    "failed":"error ocurred"
                    })
                }
                else{
                     
                    console.log("fv");
            res.send({
                    "code":200,
                    "success":"user registered sucessfully"});
            
                }
            
            
            
            })

          }
      })
})

app.post("/surveyAnswers",(req,res) => {
  const email = req.body.email;
  const userType = req.body.userType;
  //const SurveyId = req.body.Surveyid;
  const AttemptId = req.body.AttemptId;
  const Combination = req.body.Combination;
  const Response = req.body.Response;

  db.conn.query( "INSERT INTO UserResponses(EmailID,UserType,SurveyID,AttemptID,Combination,Response) VALUES (?,?,'1',?,?,?) ",
  [email,userType,AttemptId,Combination,Response], (err,result) =>
  { if(err)
    {
      console.log(err);
      res.send({"status": false})
    }
    else
    {
    res.send({status: true});
    console.log(result);
    }
  });
})


app.post("/newsletter", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    db.conn.query( "INSERT INTO Newsletter (email) VALUES (?)",
       [email],
       (err,result) => {
  
        res.send({ "status": true});
         console.log(result);
       });
    });


    app.get("/profiledetails",[authJWT.verifyToken],(req, res) => {

        const userid = req.userId;
        //console.log(username);
        //res.send({message: username});
        console.log("****Z");
        console.log(userid);
    
        
      
        db.conn.query("SELECT emailID,First_Name, Last_Name, DOB, Sex, LicenseID,pass from Users where UserID = ?", userid,
        (err,result) => {
          if(err)
          {
            console.log(err);
            res.send({err: err});
    
            res.send({ status : false, message : "Internal error"});
          }
          else
          {
            console.log(result);
            if (result && result.length > 0) {
            res.send({ status: true, email: result[0].emailID,First_Name: result[0].First_Name, 
              lastname : result[0].Last_Name,
              dob : result[0].DOB,
              sex : result[0].Sex,
              LicenseID : result[0].LicenseID,
              pass : result[0].pass
            });
            }
            else {
              res.send({ status : false, message : "Profile doesnt exist"});
            }
          }
        }
        )
      });
      app.delete("/profiledelete", [authJWT.verifyToken],(req,res) => {
        const userid = req.userId;
    
    
        const sqlDelete = "DELETE FROM Users WHERE UserID = ?";
    
        db.conn.query (sqlDelete,userid, (err,result) => {
          if(err) {
          console.log(err);
          res.send({ "status": false, message: "Error while delete DB"});
          }
      
          if(result) {
            res.send({ "status": true});
            }
      }
      )
    })
    
    app.put("/profileupdate" , [authJWT.verifyToken],(req,res) =>
    {
      const userid = req.userId;
      const fname = req.body.fname;
      const lname = req.body.lname;
      
      const sqlUpdate = "UPDATE  Users SET First_Name = ?, Last_Name = ? where UserID = ? ";
      db.conn.query(sqlUpdate,[fname,lname,userid], (err,result) =>
      {
        if(err) {
        console.log(err);
        res.send({ "status": false, message: "Error while updating DB"});
        }
    
        if(result) {
          res.send({ "status": true});
          }
    
      })
    })
    
    
    app.post("/contactUs", (req,res) => 
    {
      const email = req.body.email;
      const subject = req.body.subject;
      const mes = req.body.mes;
    
      db.conn.query( "INSERT INTO contactUs (email, subject, message) VALUES (?,?,?)",
         [email,subject,mes],
         (err,result) => {
            if(err)
            {res.send({ "message": err});
            }
            if(result) {
            res.send({ "status": true});
            }
         });
      });

      
      app.get("/displayAllSurvey",function(req,res){

        db.conn.query("SELECT * FROM Surveys", (err,result) => 
        {
          if(err)
          {
            console.log(err);
            res.send({err: err});

            res.send({status : false, message :"Internal error"});
          }
          else
          {
            console.log(result);
            if(result && result.length >0)
            {
              res.send({ status: true, surveyId : result[0].SurveyID,
                surveyTitle : result[0].SurveyTitle,
                NoQues: result[0].NoQues,
                OptDesc: result[0].OptDesc,
                CategoryID: result[0].CategoryID,
                SurveyStatus: 'A'
              })
            }
            
          }
        })
      })

      app.get("/surveyQuestion",function(req,res){

        const surveyId = req.query.surveyId;
        
        db.conn.query("SELECT * FROM SQuestions WHERE SurveyID = ? ",surveyId, (err,result) =>
        {
          if(err)
          {
            console.log(err);
            res.send({err:err});
            res.send({status : false, message :"Internal error"});
          }
          else
          {
            // console.log(result);
             console.log(result.length);
             var i;
             var optionArray = [] ;
              var promise = [];
              result.map((item) => {
                promise.push( new Promise ((resolve, reject) =>(
                  db.conn.query("SELECT OptID , OptText FROM QOptions WHERE Combination = ? ", item['SNo'], function(err, optionresult, fields){
                    if(err) throw err;
                    console.log(optionresult.length);
                    if(optionresult.length>0) {
                      for(var j=0;j<optionresult.length;j++) {
                      optionArray.push({"optionId" : optionresult[j].OptID, "OptionText":optionresult[j].OptText});
                      }
                      item['options'] = optionArray;
                      optionArray = [] ;
                      console.log("***** " + JSON.stringify(item));
                    } else {
                      console.log("error");
                    }
                    resolve();
                  })

            )))});
            Promise.all(promise).then(() =>{
              res.send(result);
            });
          
          }

          }
        )
      })

      app.get("/surveyOptions", function(req,res){

        const comb = req.body.comb;

        db.conn.query("SELECT OptID , OptText FROM QOptions WHERE Combination = ? ", comb,(err,result) =>
        {
          if(err)
          {
            console.log(err);
            res.send({err:err});
            res.send({status : false, message :"Internal error"});
          }
          else
          {
            res.send(result);
          }
        }
        )

      })


app.post('/user/forgotpassword', function(req, res){
    var data = {
        
      "EmailID":req.body.email,
        }
     console.log(req.body.email); 
     console.log("DB")  
     db.conn.query(`SELECT * FROM users where EmailID='${req.body.email}'`,
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
                "Status" : "EmailID Not recognized"
            })
        }
        else{
            const crypto=require('crypto');
            const token = crypto.randomBytes(30).toString('hex')
            var resetPasswordTokenExpires = new Date()
            console.log(db.conn.escape(resetPasswordTokenExpires))
            var t = req.body.email
            var sql = `Update users SET resetPasswordToken = '${req.body.resetPasswordToken}', resetPasswordTokenExpires = '${resetPasswordTokenExpires}' Where EmailID = '${req.body.email}'`
            db.conn.query(sql,[token,resetPasswordTokenExpires,t],function(error,result,fields){
                if(error){
                    console.log(error)
                    res.send({
                        "code":400,
                    "failed":"error ocurred"
                    })
                }
                else{
                    var nodemailer = require('nodemailer');
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                          user: 'startwell2021@gmail.com',
                          pass: 'Welcome@123'
                        }
                    });
                      var mailOptions = {
                        from: 'startwell2021@gmail.com',
                        to: req.body.email,
                        subject: 'Link To Reset Password',
                        text:'You are recieving this email because you have requested to reset the password.\n'
                        +'Please click the below link\n\n'+
                        'http://localhost:3000/ResetPassword?token='+token
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


app.get('/user/resetpassword', cors(corsOptions),function(req,res){
    console.log("In re-setpassword",req.query)
    var data = {
        "resetPasswordToken" : req.query.resetPasswordToken,
    }
    console.log(data.resetPasswordToken)
    db.conn.query(`SELECT * from users where resetPasswordToken = '${req.query.resetPasswordToken}'`,
    data.resetPasswordToken,function(error,results,fields){
        var d = new Date()
        console.log("token expires date value",d,"  ",new Date(results[0].resetPasswordTokenExpires))
        console.log("time value",d - new Date(results[0].resetPasswordTokenExpires))
        if(error){
            res.send({
                "code":400,
                "Status":"error occured"
            })
        }
        else if(d - new Date(results[0].resetPasswordTokenExpires)<= 36000000){
            //res.setHeader("Access-Control-Allow-Origin","*")
            //res.redirect('http://localhost:3000/ResetPassword')
            res.send({

                "code" : 200,
                "Status":"reset link OK",
                results
            })
            
        }
        else{
            res.send({
                "code" : 210,
                "Status" : "reset link expired"
            })
        }
    })

})

app.put('/user/updatepassword', function(req,res)
{
    var data = {
       
      "EmailID":req.body.email,
       "Pass":req.body.password
    
        }
      const SALT_ROUND = 12
      let hashedPassword = bcrypt.hashSync(data.Pass,SALT_ROUND)
        db.conn.query(`Update users SET Pass = '${req.body.password}' Where EmailID ='${req.body.email}'`,
        [hashedPassword,data.EmailID],function(error,results,fields){
            console.log(data.EmailID)
            console.log(hashedPassword)
            console.log(req.body.password)
            if(error){
                console.log(error);
                res.send({
                    "code":400,
                    "Status":"error occured",
                })
            }
            else{
                res.send({
                    "code":200,
                    "Status" : "Password updated successfully",
                })
            }
        })

})



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


