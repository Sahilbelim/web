var mysql = require("mysql");
var ConnectionObject = {
  host: "localhost",
  port: 3308,
  user: "root",
  password: "",
  database: "stock",
};
var con = mysql.createConnection(ConnectionObject);
con.connect(function (error, result) {
  if (error) {
    console.log("error in making connection");
    console.log(error.massage);
    console.log(error.errno);
  } else {
    console.log("connection established successfully..");
  }
});
module.exports.con = con;
