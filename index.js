const express = require('express')
const app = express()
const config=require("./config.json");
// const mongooes = require("mongoose");
const fs= require("fs");

app.use(express.json());
// respond with "hello world" when a GET request is made to the homepage
// it create route 
// it first contain path, then callback function
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.post("/",(res,req)=>{
    // res.send(req.body.name);
    if(res.body.name != null){
        req.send({
            statusCode:200,
            message:"name is found",
            error:false,
            data:[{name:res.body.name, email:res.body.email}],
        });
    }
    else{
        req.send({
            statusCode:404,
            message:"name is not found",
            error:false,
            data:null,
        });
    }
});



// fs.writeFile("test.txt","hello i am here",(res,req)=>{
//     console.log(res,req);
// })

// fs.readFile("test.txt",(err,res)=>{
//     console.log(err,res.toString());
// })
// its async , as we need to pass callback

// const file=fs.readFileSync("test.txt");
// console.log(file.toString());

//  readfilesync is sync funciton
app.listen(config.server.port);

// body parser - convert data into json format
