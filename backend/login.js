var express = require("express");
var connection = require("./connection");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true})); //move this line after intializing app

app.post("/login", function(request, response){
    console.log(request.body)
    var email = request.body.email
    var password = request.body.password
    if (email === undefined || password === undefined){
        response.json({'error' : 'input is missing'});
    }
    else{
        var sql = `SELECT id FROM users WHERE email='${email}' and password='${password}'`;
        connection.con.query(sql, function(error, result){
            if(error)
            {
                console.log("error in select query");
            }
            else{
                var size = result.length;
                console.log(size);
                var list = [{"error" : 'no'}];
                if(size == 0){
                    list.push({"success" : 'no'});
                    list.push({ "message": 'invalid login attempt' });
                    console.log("invalid login attempt");
                }
                else{
                    list.push({"success" : 'yes'});
                    list.push({ "message": 'login successfull' });
                    console.log("login successfull");
                    let id=result[0].id;
                    list.push({ "id": id });
                    
                 
                    // for(let position = 0; position<size; position++);
                    // {
                    //     list.push(result[position]);
                    // }
                }
                list = JSON.parse(JSON.stringify(list));
                console.log(list)
                response.json(list);
            }
        });
    }
});

app.listen(5000);