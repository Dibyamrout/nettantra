let mysql = require("mysql");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login"
});
con.connect(function(error) {
    if (error) { throw error; } else {
        console.log('Connected');
    }

});


module.exports = con;