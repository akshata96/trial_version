var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kepler111",
    database : 'startwelldb',
    insecureAuth : true
  });
  



module.exports = {
    conn
}
    