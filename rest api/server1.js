const express= require('express');
const { ROUTE_CONST} = require('./helpers/route');
var bodyParser = require('body-parser')
const app=express();//to initialize
//express js internally uses http module
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//GET,POST,DELETE,
//Parameters:route,callback function
app.get(ROUTE_CONST.GET_LOGINDET,function (req,res){
    res.sendFile(__dirname+'/Loginpage.html')
});
app.post(ROUTE_CONST.POST_LOGIN,function(req,res){
    console.log(req.body);
    res.send("Successfully Logged in!")
})
app.listen(3000);