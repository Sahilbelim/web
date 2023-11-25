var express = require("express");
var connection = require("./connection");
var app = express();
app.get("/getprice/:id", function(request, response){
    let id = request.params.id;
    var sql = `SELECT * FROM price WHERE company_id = ${id}`;
        connection.con.query(sql, function(error, result){
            if(error)
            response.json({"error" : error})
            else{
                var output = JSON.parse(JSON.stringify(result));
                response.json(output);
            }
        });
});
app.listen(5000);