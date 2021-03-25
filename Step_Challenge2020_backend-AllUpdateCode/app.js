const express = require('express');
const mysql = require("mysql");
const app = express();
var bcrypt = require("bcrypt")
var bodyParser = require('body-parser');
var path = require('path');
var mailer = require("nodemailer");
var Crypto = require('crypto')
var moment = require('moment')
var teamcheck = require('./routes/teamcheck')
var checkuser = require('./routes/checkuser')
var resetpassword = require('./routes/resetpassword')
var getTotalStepCount = require('./routes/getTotalStepCount')
var RegisterToChallenge = require('./routes/RegisterToChallenge')
var updatepassword = require('./routes/updatepassword')
var forgotpassword = require('./routes/forgotpassword')
var addUser = require('./routes/addUser')
var getParticipantSay = require('./routes/getParticipantSay')
var regeneratelink = require('./routes/regeneratelink')
var validatetoken = require('./routes/validatetoken')
var getChallengeData = require('./routes/getChallengeData')
var profile = require('./routes/profile')
var GetDataforChart = require('./routes/GetDataforChart')
var SearchByEMTeam = require('./routes/SearchByEMTeam')
var postMonthlyGoal = require('./routes/postMonthlyGoal')
var postDailyGoal = require('./routes/postDailyGoal')
var getStepCountforday = require('./routes/getStepCountforday')
var entersteps = require('./routes/entersteps')
var row1 = require("./routes/row1")
var card = require("./routes/card")
var individualrankings = require("./routes/individualrankings")
var groupranking = require('./routes/groupranking')
var Stepsuperstar = require("./routes/Stepsuperstar")
var groupavg = require('./routes/groupavg')
var topAlumni = require('./routes/topAlumni')
var searchUsers = require('./routes/searchUsers')

const port = 9000;



// var connection = mysql.createConnection({

//     host: 'stark.cse.buffalo.edu',
//     user: 'steps_user',
//     password: 'ChangeMe!',
//     database:'step_db'

// });

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/teamcheck', teamcheck)
app.use('/checkuser',checkuser)
app.use('/resetpassword',resetpassword)
app.use('/getTotalStepCount',getTotalStepCount)
app.use('/RegisterToChallenge',RegisterToChallenge)
app.use('/updatepassword',updatepassword)
app.use('/forgotpassword',forgotpassword)
app.use('getParticipantSay',getParticipantSay)
app.use('/addUser',addUser)
app.use('/regeneratelink',regeneratelink)
app.use('/validatetoken',validatetoken)
app.use('/getChallengeData',getChallengeData)
app.use('/profile',profile)
app.use('/GetDataforChart',GetDataforChart)
app.use('/SearchByEMTeam',SearchByEMTeam)
app.use('/postMonthlyGoal',postMonthlyGoal)
app.use('/postDailyGoal',postDailyGoal)
app.use('/getStepCountforday',getStepCountforday)
app.use("/addsteps",entersteps)
app.use("/row1",row1)
app.use("/card",card)
app.use("/stepsuperstar",Stepsuperstar)
app.use('/individualrankings',individualrankings)
app.use('/groupranking',groupranking)
app.use('/groupavg',groupavg)
app.use('/topAlumni',topAlumni)
app.use('/searchUsers',searchUsers)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// connection.connect(function(error){

//     if(!!error){
//         console.log(error);
//         console.log('Error in app');

//     }
//     else{
//         console.log('Connected');
//     }
// });



// app.post('/checkuser', function(req,res){
//     console.log(req.body)
//     var useremail = req.body.user.email;

//     connection.query("SELECT * from User_Table WHERE Email=?",[useremail],
//     function(error,results,fields){

//         if(error){
//             console.log("failed");
//             res.send({
//                 "code":400,
//         "failed":"error ocurred"
//             });
//         }
//         else{
//             if(results.length>0){
//                 //console.log(results)
//                 let b = bcrypt.compareSync(req.body.user.password,results[0].Password)
//                 if(b){
//                     console.log("success");
//                     res.send({
//                         "code":200,
//                         "success":"login sucessful",
//                         results

//                     })
//                 }
//                 else{
//                     console.log("does not match");
//                     res.send({
//                         "code":204,
//                         "success":"Email and password does not match"
//                     })
//                 }
//             }
//             else{
//                 console.log("does not exist");
//                 res.send({
//                     "code":206,
//                     "success":"Email does not exists"
//                       });
//             }


//         }


//     })
// })

// app.get('/getTotalStepCount',function(req,res){
//     var data = {
//         user_id : req.query.user_id,
//         Challenge_ID : req.query.Challenge_ID
//     }
//     var totalStepCount = 0
//     connection.query("SELECT * from Steps_Table where Steps_User_fk_ID = ? and Steps_Challenge_fk_ID = ?",
//     [data.user_id,data.Challenge_ID],function(error,results,fields){
//         if(error){
//             res.send({
//                 "code":400,
//                 "Status":"Error Occured"
//             })
//         }
//         else{
//             for(x in results){
//                 totalStepCount = totalStepCount + results[x].Steps  
//             }
//             res.send({
//                 "code" : 200,
//                 "Status":"Successfully retrieved",
//                 "totalStepCount" :totalStepCount,
//                 "user_id" : data.user_id,
//                 "Challenge_ID" : data.Challenge_ID
//             })
//         }
//     })
// })





// app.get('/resetpassword', function(req,res){
//     console.log(req.query)
//     var data = {
//         "token" : req.query.resetPasswordToken,
//     }
//     console.log(data.token)
//     connection.query("SELECT * from User_Table where resetPasswordToken = ?",
//     data.token,function(error,results,fields){
//         var d = new Date()
//         console.log(results)
//         console.log(d - results[0].resetPasswordTokenExpires)
//         if(error){
//             res.send({
//                 "code":400,
//                 "Status":"error occured"
//             })
//         }
//         else if(d - results[0].resetPasswordTokenExpires <= 3600000){
//             res.send({
//                 "code" : 200,
//                 "Status":"reset link OK",
//                 results
//             })
//         }
//         else{
//             res.send({
//                 "code" : 210,
//                 "Status" : "reset link expired"
//             })
//         }
//     })

// })





// app.post("/RegisterToChallenge",function(req,res){
//     console.log(req.body)
//     var d = new Date().getFullYear()
//     var enrolls = {
//         "Enrolls_User_fk_ID": req.body.Data.user_id,
//         "Enrolls_Challenge_fk_ID":req.body.Data.challenge_id,
//         "Term_Enrolled" : d
//     }
//     var user_id = req.body.Data.user_id
//     var data  = {
//         "Address_Line1" :req.body.Data.AddressLine1,
//         "Address_Line2" : req.body.Data.Address_Line2,
//         "City" : req.body.Data.City,
//         "State" :req.body.Data.State,
//         "ZipCode" : req.body.Data.ZipCode,
//         "Contact" : req.body.Data.Contact,
//         "Affiliation" : req.body.Data.UBAffiliation
//     }
//     var sql = "Update User_Table SET Address_Line1 = ?,Address_Line2 = ?, City = ?, State = ?,ZipCode = ?, Contact = ?,Affiliation=? Where User_ID = ?"
//     connection.query(sql,[data.Address_Line1,data.Address_Line2,data.City,data.State,data.ZipCode,data.Contact,data.Affiliation,user_id],
//         function(error,results,fields){
//             if(error){
//                 res.send({
//                     "code":400,
//                     "Status":"Error Occured"
//                 })
//             }
//             else{
//                 var s ="INSERT INTO Enrolls_in SET ?"
//                 connection.query(s,enrolls,function(error,results,fields){
//                     if(error){
//                         console.log(error)
//                         res.send({
//                             "code":400,
//                             "Status" : "Error Occured"
//                         })
//                     }
//                     else{
//                         res.send({
//                             "code":200,
//                             "Status":"Updated Successfully"
//                         })
//                     }

//                 })
                
//             }
//         })

// })




// app.get('/getParticipantSay', function(req, res){


//     var sl = "select Participant_Say, CONCAT(First_Name,' ',Last_Name) Full_Name, Profile_Picture from (select * from step_db.Merit_Participant_Say as M join step_db.User_Table as U on U.User_ID = M.User_ID_fk_Participant order by Term desc limit 3) as t;"

//     connection.query(sl,"",function(error,rows,fields){
//         if(error)
//                 {
//                     res.send({
//                         "code":400,
//                         "Status":"Error Occured"
//                     })
//                 }
//                 else{
//                     console.log(rows)
//                     res.send({
//                         "Code" : 200,
//                         "Status" : "getParticipantSay records retrieval successful",
//                          rows
//                     })
//                 }
//     });
    

// });


// app.put('/updatepassword', function(req,res){
//     var data = {
       
//       "Email":req.body.email,
//        "Password":req.body.password
    
//         }
//         const SALT_ROUND = 12
//       let hashedPassword = bcrypt.hashSync(data.Password,SALT_ROUND)
//         connection.query("Update User_Table SET Password = ? Where Email = ?",
//         [hashedPassword,data.Email],function(error,results,fields){
//             console.log(hashedPassword)
//             console.log(req.body.password)
//             if(error){
//                 console.log(error);
//                 res.send({
//                     "code":400,
//                     "Status":"error occured",
//                 })
//             }
//             else{
//                 res.send({
//                     "code":200,
//                     "Status" : "Password updated successfully",
//                 })
//             }
//         })

// })

// app.post('/forgotpassword', function(req, res){
//     var data = {
        
//       "Email":req.body.email,
//         }
        
//      connection.query("SELECT * from User_Table where Email = ?",
//      data.Email, function(error,results,fields){
//         console.log(req)
//         if(error){
//             console.log(error)
//             res.send({
//                 "code":400,
//             "Status":"error ocurred"
//             })
//           }
//         else if(results.length == 0){
//             console.log("no results")
            
//             res.send({
//                 "code": 210,
//                 "Status" : "Email Not recognized"
//             })
//         }
//         else{
//             const token = Crypto.randomBytes(30).toString('hex')
//             var tokenexpires = new Date()
//             console.log(connection.escape(tokenexpires))
//             var t = req.body.email
//             var sql = "Update User_Table SET resetPasswordToken = ?, resetPasswordTokenExpires = ? Where Email = ?"
//             connection.query(sql,[token,tokenexpires,t],function(error,result,fields){
//                 if(error){
//                     console.log(error)
//                     res.send({
//                         "code":400,
//                     "failed":"error ocurred"
//                     })
//                 }
//                 else{
//                     var transporter = mailer.createTransport({
//                         service: 'gmail',
//                         auth: {
//                           user: 'stepchallengeapp2020@gmail.com',
//                           pass: 'Bindu12345'
//                         }
//                     });
//                       var mailOptions = {
//                         from: 'stepchallengeapp2020@gmail.com',
//                         to: req.body.email,
//                         subject: 'Link To Reset Password',
//                         text:'You are recieving this email because you have requested to reset the password.\n'
//                         +'Please click the below link\n\n'+
//                         'http://localhost:3000/ResetPassword/'+token







//                       };
//                       transporter.sendMail(mailOptions, function(error, info){
//                         if (error) {
//                           console.log(error);
//                         } else {
//                           console.log('Email sent: ' + info.response);
//                         }
//                       });


//                       res.send({
                
//                         "code":200,
//                             "success":"Email Sent Successfully"
//                     });

//                 }
//             })
            
//         }
//      })

// })



// app.post('/addUser', function(req,res){
//     var data = {
//         "First_Name":req.body.user.firstname,
//       "Last_Name":req.body.user.lastname,
//       "Email":req.body.user.email,
//        "Password":req.body.user.password
    
//         }
//         const SALT_ROUND = 12
//       let hashedPassword = bcrypt.hashSync(data.Password,SALT_ROUND)
//       connection.query("SELECT COUNT(*) As total from User_Table where Email = ?",
//       data.Email, function(error,results,fields){
//           if(error){
//             console.log(error)
//             res.send({
//                 "code":400,
//             "Status":"error ocurred"
//             })
//           }
//           else if(results[0].total>0){
//               res.send({
//                   "code" : 210,
//                   "Status" : "Email Already exists"
//               })
//           }
//           else {
//             const token = Crypto.randomBytes(30).toString('hex')
//             var tokenexpires = new Date()
//             console.log(connection.escape(tokenexpires))
            
//               data.Password = hashedPassword
//               var sql = "INSERT INTO User_Table (First_Name, Last_Name, Email, Password, resetPasswordToken, resetPasswordTokenExpires) values (?, ?, ?, ?, ?, ?)"
//               connection.query(sql,[data.First_Name, data.Last_Name, data.Email, data.Password, token, tokenexpires] , function(error,results,fields){
//                 console.log(req.body);
//                 if(error){
//                     console.log(error)
//                     res.send({
//                         "code":400,
//                     "failed":"error ocurred"
//                     })
//                 }
//                 else{
//                     var transporter = mailer.createTransport({
//                         service: 'gmail',
//                         auth: {
//                           user: 'stepchallengeapp2020@gmail.com',
//                           pass: 'Bindu12345'
//                         }
//                       });
//                       var mailOptions = {
//                         from: 'stepchallengeapp2020@gmail.com',
//                         to: req.body.user.email,
//                         subject: 'Link To activate account',
//                         text: 'You are recieving this email because you have requested to create an account.\n'
//                         +'Please click the below link\n\n'+
//                         'http://localhost:3000/ConfirmEmail/'+token
//                       };
//                       transporter.sendMail(mailOptions, function(error, info){
//                         if (error) {
//                           console.log(error);
//                         } else {
//                           console.log('Email sent: ' + info.response);
//                         }
//                       });
//                     console.log("fv");
//             res.send({
                
//                 "code":200,
//                     "success":"user registered sucessfully"
//             });
            
//                 }
            
            
            
//             })

//           }
//       })
// })



// app.get('/regeneratelink', function(req, res)
// {
//     console.log(req)
//     var data = {
//         "Email": req.query.email_id
//     }

//     const token = Crypto.randomBytes(30).toString('hex')
//             var tokenexpires = new Date()
//             console.log(connection.escape(tokenexpires))
//             //var t = req.body.email
//             var sql = "UPDATE User_Table SET resetPasswordToken = ?, resetPasswordTokenExpires = ? Where Email = ?"
//             connection.query(sql,[token, tokenexpires, data.Email] , function(error,results,fields){
//                 console.log(req.body);
//                 if(error){
//                     console.log(error)
//                     res.send({
//                         "code":400,
//                     "failed":"error ocurred"
//                     })
//                 }
//                 else{
//                     var transporter = mailer.createTransport({
//                         service: 'gmail',
//                         auth: {
//                           user: 'stepchallengeapp2020@gmail.com',
//                           pass: 'Bindu12345'
//                         }
//                       });
//                       var mailOptions = {
//                         from: 'stepchallengeapp2020@gmail.com',
//                         to: data.Email,
//                         subject: 'Link To activate account',
//                         text: 'You are recieving this email because you have requested to create an account.\n'
//                         +'Please click the below link to activate your account.\n\n'+
//                         'http://localhost:3000/ConfirmEmail/'+token
//                       };
//                       transporter.sendMail(mailOptions, function(error, info){
//                         if (error) {
//                           console.log(error);
//                         } else {
//                           console.log('Email sent: ' + info.response);
//                         }
//                       });
                    
//             res.send({
                
//                 "code":200,
//                     "success":"User registered sucessfully"
//             });
            
//                 }
            
            
            
//             })
    
// })


// app.get('/validatetoken', function(req,res){
//     console.log(req.query)
//     var data = {
//         "token" : req.query.resetPasswordToken,
//     }
//     console.log(data.token)
//     connection.query("SELECT * from User_Table where resetPasswordToken = ?",
//     data.token,function(error,results,fields){
//         console.log(results.length)
//         if(results.length <= 0){
//             res.send({
//                 "code" : 420,
//                 "Status": "No record found"
//             })
//         }
//         var d = new Date()
//         console.log(results)
//         console.log(d - results[0].resetPasswordTokenExpires)
//         if(error){
//             res.send({
//                 "code":400,
//                 "Status":"error occured"
//             })
//         }
//         else if(d - results[0].resetPasswordTokenExpires <= 3600000){
//             connection.query("Update User_Table SET Is_Confirmed = ? Where Email = ?",
//             ['TRUE', results[0].Email],function(error,resul,fields){
//                 if(error){
//                     console.log(error);
//                     res.send({
//                         "code":400,
//                         "Status":"error occured",
//                     })
//                 }
//                 else{
//                     res.send({
//                         "code":200,
//                         "Status" : "Updated Is_Confirmed field in DB successfully",
//                         results
//                     })
//                 }
//             })
//             res.send({
//                 "code" : 200,
//                 "Status":"Activation link OK",
//                 results
//             })
//         }
//         else{
//             res.send({
//                 "code" : 210,
//                 "Status" : "Activation link expired",
//                 results

//             })
//         }
//     })

// })



// app.get('/getChallengeData', function(req, res){
//     //console.log(req.query)
//     var data = {
//         "user_id" : req.query.user_id,
//     }
//     //console.log(data.user_id)
    
//     connection.query("SELECT * from Challenge_Table", function(error,rows,fields){

//         if(error){
//             console.log(error);
//             res.send({
//                 "code":400,
//         "failed":"error ocurred"
//             });
//         }
//         else{
//             var query = "SELECT * FROM Enrolls_in, Challenge_Table,User_Table where Enrolls_Challenge_fk_ID = Challenge_ID and User_ID = Enrolls_User_fk_ID and User_ID = ?"
//             enrollresults = ""
//             connection.query(query,data.user_id,function(error,resu,fields){

//                 if(error){
//                     res.send({
//                         "code":400,
//                         "Status": "Error Occured"
//                     })
//                 }
//                 else{
//                    // console.log(resu)
//                     enrollresults = resu;
//                     //console.log(resu)
//                     //console.log(rows.length)
//                     //console.log(resu.length)
                    
//                     //console.log(rows);
//             for(y in resu){
//                 for(x in rows){
//                     if(rows[x].Challenge_ID === resu[y].Enrolls_Challenge_fk_ID)
//                         rows[x].isEnrolled = true
//                 }
              
//             }
            
//             CurrentChallenges = []
//             FutureChallenges = []
//             CompletedChallenges = []
//             for(var p in rows){
                
//                 let cdt = Date.now()
//                 if(cdt>rows[p].Start_Date && cdt > rows[p].End_Date){
//                     CompletedChallenges.push(rows[p])
//                     //console.log(rows[p].Start_Date)
//                 }
//                 else if (cdt >= rows[p].Start_Date && cdt < rows[p].End_Date){
//                     CurrentChallenges.push(rows[p])
//                     //console.log("This is current challenge")
//                 }
//                 else{
//                     FutureChallenges.push(rows[p])
//                     //console.log("This is future challenge")
//                 }

//                 if(!rows[p].isEnrolled)
//                     rows[p].isEnrolled = false
                
//             }
//             // console.log(CurrentChallenges)
//             // console.log(FutureChallenges)
//             // console.log(CompletedChallenges)
//             //console.log(rows)
//             res.send({
//                 "code":200,
//                 "Status": "OK",
//                 CurrentChallenges,
//                 FutureChallenges,
//                 CompletedChallenges
//              })
//                 }
//             })
//             //console.log(enrollresults)
            
            
//         }

//     })

// })






// app.get('/profile', function(req, res){

//     connection.query("SELECT * from User_Table where User_ID=7", function(error,rows,fields){

//         if(error){
//             console.log(error);
//             res.send({
//                 "code":400,
//         "failed":"error ocurred"
//             });
//         }
//         else{
//             console.log(rows);
//             res.send(
//                 rows)
//         }

//     })

// })






// app.get('/mysql', function(req, res){
//      connection.query("SELECT * from User_Table", function(error,rows,fields){
//          if(error){
//              console.log("ERROR with database");
//              console.log(error);
//          }
//          else{
//              console.log("Successful with database");
//              console.log(rows);
//              res.send('Hello' + " "+rows[0].First_Name);
//          }
//      })
// })



// app.get('/GetDataforChart',function(req,res){
//     var data = {
//         user_id : req.query.user_id,
//         challenge_id : req.query.challenge_id
//     }
//     var ret = []
//     var sq = "SELECT Steps_Date, sum(Steps) as CountOnDay FROM step_db.Steps_Table where Steps_User_fk_ID = ? and Steps_Challenge_fk_ID = ? group by date(Steps_Date);"
//     connection.query(sq,[data.user_id,data.challenge_id],function(error,results,fields){
//         if(error){
//             res.send({
//                 "code":400,
//                 "Status":"Error Occured"
//             })
//         }
//         else if(results.length > 0){
//             console.log(results)
//             for(x in results){
//                 z = results[x].Steps_Date.toISOString().
//                 replace(/T/, ' ').      
//                 replace(/\..+/, '').split(" ") 
//                // console.log(z[0])
//                 y = moment(z[0]).format("MMM D YYYY")
//                 //console.log(y)
//                 results[x].Steps_Date = y
//             }
//             res.send({
//                 "code":200,
//                 "Status":"Successfully retrieved",
//                 results
//             })
//         }
//         else{
//             res.send({
//                 "code":220,
//                 "Status":"No records found"
//             })
//         }



//     })
// })


// /*********************For Top3Individual and Top3 Team ***** */

// app.get('/gettop3cards', function(req, res){
//     pool.getConnection(function(error, tempCon){
//         if(error)
//             console.log(error);
//         else
//         {
//             console.log('gettop3cards Connected!');
//             tempCon.query("SELECT CONCAT(SU.First_Name,' ',SU.Last_Name) Full_Name, SU.Steps Steps,SU.Profile_Picture Profile_Picture, SU.Steps_Challenge_fk_ID Challenge_ID from(SELECT First_Name, Last_Name, sum(Steps) Steps,Profile_Picture, S.Steps_Challenge_fk_ID FROM  step_db.User_Table as U join step_db.Steps_Table as S on U.User_ID = S.Steps_User_fk_ID where S.Steps_Challenge_fk_ID = 4 group by U.User_ID) SU order by SU.Steps desc limit 3;", function(error, rows, field){
//                 if(error)
//                 {
//                     console.log('Error in the query');
//                 }
//                 else{
                    
//                    i = 0;
//                    for(var x in rows){
//                        rows[x].indexno = i + 1;
//                        i++;
//                        console.log(rows[x])
//                    }
//                     res.send({
//                         "Code" : 200,
//                         "Status" : "gettop3cards records retrieval successful",
//                          rows
//                     })
//                 }
//             })
//         }
//     });

// })

// app.get('/gettop3team', function(req, res){
//     pool.getConnection(function(error, tempConn){
//         if(error)
//             console.log(error);
//         else
//         {
//             console.log('gettop3team Connected!');
//             tempConn.query("SELECT  T.Team_ID Team_ID, T.Team_Name Team_Name, sum(S.TotalSteps) Steps,T.Profile_Picture Profile_Picture, T.Team_Challenge_fk_ID Challenge_ID FROM step_db.Teams_Table T join step_db.Team_Members_table TM on T.Team_ID = TM.TM_Team_fk_ID join ( SELECT Steps_User_fk_ID, Steps_Challenge_fk_ID, sum(Steps) TotalSteps FROM step_db.Steps_Table group by Steps_User_fk_ID) as S on TM.TM_User_fk_ID = S.Steps_User_fk_ID and T.Team_Challenge_fk_ID = S.Steps_Challenge_fk_ID where T.Team_Challenge_fk_ID = 4 GROUP BY T.Team_ID ORDER BY Steps desc limit 3;", function(error, rows, field){
//                 if(error)
//                 {
//                     console.log('Error in the query');
//                 }
//                 else{
//                     i = 0;
//                     for(var x in rows){
//                         rows[x].indexno = i + 1;
//                         i++;
//                         console.log(rows[x])
//                     }

//                     res.send({
//                         "Code" : 200,
//                         "Status" : "gettop3cards records retrieval successful",
//                          rows
//                     })
//                 }
//             })
//         }
//     });

// })


/*************End of Top3 Individual and Team  ***********/

app.get('/', (req , res) => res.send("Hello World"));
app.get('/newEndpoint', (req , res) => res.send("This is my new Endpoint"));

app.listen(port, ()=> console.log("running in port 9000"));
