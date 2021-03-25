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
router.get('/:userId', function(req, res, next) {
    handle_database(req,res)
});

function handle_database(req,res) {
    // connection will be acquired automatically
    
    let userId = req.params.userId;
    let query1 = `SELECT  u.first_name,u.Last_Name ,u.Email,u.City,t.IS_Leader from 
	step_db.User_Table u
	inner join
	 step_db.Team_Members_table t
	 on u.User_ID = t.TM_User_fk_ID 
	inner join 
		step_db.Teams_Table tt 
		on t.TM_Team_fk_ID = tt.Team_ID 
	 
    where t.TM_Team_fk_ID = 
    (SELECT tmt.TM_Team_fk_ID  from Team_Members_table tmt
         inner join User_Table ut on ut.User_ID = tmt.TM_User_fk_ID WHERE ut.User_ID=${userId});
`;
    pool.query(query1,function(err,body){
         
     if(err) {
         return res.json({'error': true, 'message': 'Error occurred'+err});
     }
             //connection will be released as well.
            
             res.send(body);
             
    });
}


module.exports = router;