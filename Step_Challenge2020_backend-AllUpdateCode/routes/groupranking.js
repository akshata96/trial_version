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
router.get('/:challengeID', function(req, res, next) {
    handle_database(req,res)
});

function handle_database(req,res) {
    // connection will be acquired automatically
    
    let challengeID = req.params.challengeID;
    let query1 = `select sum(st.Steps) as steps,tmt.TM_Team_fk_ID,tt.Team_Name,tt.Profile_Picture 
      from step_db.Team_Members_table tmt
    inner join step_db.Steps_Table st on tmt.TM_User_fk_ID =st.Steps_User_fk_ID 
    inner join step_db.Teams_Table tt on tmt.TM_Team_fk_ID = tt.Team_ID 
    where tt.Team_Challenge_fk_ID =${challengeID}
    group by tmt.TM_Team_fk_ID order by sum(st.Steps) DESC , tt.Team_ID ASC LIMIT 10
`;
    pool.query(query1,function(err,body){
         
     if(err) {
         return res.json({'error': true, 'message': 'Error occurred'+err});
     }
             //connection will be released as well.
            
             
             var i=0
             top3=[]
             remain7=[]
             for (var x in body){
                 if (i<3){
                     top3.push(body[x])
                     
                 }
                 else{
                     remain7.push(body[x])
                 }
                 i+=1
             }
            res.send({top3,remain7});
             
    });
}


module.exports = router;