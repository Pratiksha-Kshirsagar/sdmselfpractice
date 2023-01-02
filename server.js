const express=require("express");
//const { dirname } = require("path");
const app=express();
const path=require("path");
var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);
app.get('/',function(req,res){
  
    res.sendFile(path.join(__dirname,"/public/index.html"));
}) 

app.listen(2020);
console.log("server is running");
