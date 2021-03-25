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
    //console.log(req.query)
    var data = {
        "user_id" : req.query.user_id,
    }
    //console.log(data.user_id)
    
    pool.query("SELECT * from Challenge_Table", function(error,rows,fields){

        if(error){
            console.log(error);
            res.send({
                "code":400,
        "failed":"error ocurred"
            });
        }
        else{
            var query = "SELECT * FROM Enrolls_in, Challenge_Table,User_Table where Enrolls_Challenge_fk_ID = Challenge_ID and User_ID = Enrolls_User_fk_ID and User_ID = ?"
            enrollresults = ""
            pool.query(query,data.user_id,function(error,resu,fields){

                if(error){
                    res.send({
                        "code":400,
                        "Status": "Error Occured"
                    })
                }
                else{
                   // console.log(resu)
                    enrollresults = resu;
                    //console.log(resu)
                    //console.log(rows.length)
                    //console.log(resu.length)
                    
                    //console.log(rows);
            for(y in resu){
                for(x in rows){
                    if(rows[x].Challenge_ID === resu[y].Enrolls_Challenge_fk_ID)
                        rows[x].isEnrolled = true
                }
              
            }
            
            CurrentChallenges = []
            FutureChallenges = []
            CompletedChallenges = []
            for(var p in rows){
                
                let cdt = Date.now()
                if(cdt>rows[p].Start_Date && cdt > rows[p].End_Date){
                    CompletedChallenges.push(rows[p])
                    //console.log(rows[p].Start_Date)
                }
                else if (cdt >= rows[p].Start_Date && cdt < rows[p].End_Date){
                    CurrentChallenges.push(rows[p])
                    //console.log("This is current challenge")
                }
                else{
                    FutureChallenges.push(rows[p])
                    //console.log("This is future challenge")
                }

                if(!rows[p].isEnrolled)
                    rows[p].isEnrolled = false
                
            }
            // console.log(CurrentChallenges)
            // console.log(FutureChallenges)
            // console.log(CompletedChallenges)
            //console.log(rows)
            res.send({
                "code":200,
                "Status": "OK",
                CurrentChallenges,
                FutureChallenges,
                CompletedChallenges
             })
                }
            })
            //console.log(enrollresults)
            
            
        }

    })

})


module.exports = router;