const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'placementsystem',
    multipleStatements: true
})





//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("MySQL Connected");
})

module.exports = db;