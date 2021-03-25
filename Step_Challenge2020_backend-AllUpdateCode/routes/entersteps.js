const { json } = require('body-parser');
var express = require('express');
const mysql =require('mysql');
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
        "Steps":req.body.user.Steps,
        "Steps_Date":req.body.user.Steps_Date,
        "Steps_User_fk_ID":req.body.user.Steps_User_fk_id,
        "Steps_Challenge_fk_ID":req.body.user.Steps_Challenge_fk_ID,
        "Steps_DateTime":req.body.user.Steps_DateTime      
        }
        var sql_select="select sum(Steps) from Steps_Table where Steps_User_fk_ID=? and Steps_Challenge_fk_ID=? group by ?" 
        pool.query(sql_select,[data.Steps_User_fk_ID,data.Steps_Challenge_fk_ID,data.Steps_Date],function(error,result,fields){
            if(error){
                console.log(error)
                res.send({
                "code":400,
                "Status":"error ocurred"
            })
            }
            else 
            {
             if(result>40000){
                res.send({
                "code":401,
                "Status":"Steps cannot be more than 40k"
                })
             }
             else{
                var sql="Insert  into Steps_Table (Steps,Steps_Date,Steps_User_fk_ID,Steps_Challenge_fk_ID,Steps_DateTime) values (?,?,?,?,?)"
                pool.query(sql,[data.Steps,data.Steps_Date,data.Steps_User_fk_ID,data.Steps_Challenge_fk_ID,data.Steps_DateTime],
                    function(error,results,fields){
                    if(error){
                      console.log(error)
                      res.send({
                          "code":500,
                      "Status":"error ocurred"
                      })
                    }
                     else{
                         res.send({
                          "code":200,
                              "status":"steps entered sucessfully"
                         });
                    }
                })
                }
            }
        })
    })
module.exports = router;        