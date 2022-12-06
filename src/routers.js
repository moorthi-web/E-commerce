const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


var connection = mysql.createConnection({

    host:'localhost',
user:'root',
password: 'Ganesa@@9912#',
database: 'login_credential',
multipleStatements: true

});


const app = express();

connection.connect(function(err){
    if(err){
        throw err;
    }

    connection.query("select * from user", function(err, data){

        if(err){
            console.log(err);
        }else{
            console.log(data);
        }


    });
});


// app.get('/', function(req, res){


//     connection.getConnection(function(err, connection){

//         connection.query('SELECT * FROM usersinfo', function(error, results, fields){

//             if(error) throw error;

//             res.send(results);


//         });

//     });




// });

app.listen(3001, ()=>{
    console.log('Go to http://localhost:3000/users so you can see the date.')
});