var express = require("express");
var connection = require("./connection");

var bodyParser = require("body-parser"); 
var app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended : true})); //move this line after intializing app

app.post("/register", function(request, response){
    console.log(request.body)
    let name = request.body.name
    let email = request.body.email
    let password = request.body.password
    console.log(name, email, password);
    var sql = `INSERT INTO users(name, email, password) VALUES ('${name}','${email}','${password}')`;
        connection.con.query(sql, function(error, result){
            if(error)
               { response.json({ 'error': error })
                console.log("error",error);
            }
            else{
                var output = JSON.parse(JSON.stringify(result));
                console.log("output",output)
                response.json(output)
            }
        });
        // connection.con.end();
});
app.listen(5000);