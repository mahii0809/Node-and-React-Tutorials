const express= require('express');
const { ROUTE_CONSTANTS } = require('./helpers/route_const');
var bodyParser = require('body-parser')
const requestAsync= require('async-request');
const { response } = require('express');
const app=express();//to initialize
const country="https://restcountries.eu/rest/v2/all";
//express js internally uses http module
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//GET,POST,DELETE,
//Parameters:route,callback function
app.get(ROUTE_CONSTANTS.GET_COUNTRIES,async function (req,res){
  const request = await requestAsync(country);
  res.json(response);
});
app.get(ROUTE_CONSTANTS.DEFAULT,function (req,res){
    res.sendFile(__dirname+'/pages/Home.html')
});
app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function (req,res){
  res.sendFile(__dirname+'/pages/Userview.html')
});
app.get(ROUTE_CONSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/Login.html')
});
app.get(ROUTE_CONSTANTS.GET_REGISTER,function (req,res){
    res.sendFile(__dirname+'/pages/registration.html')
});
app.post(ROUTE_CONSTANTS.POST_LOGIN,function(req,res){
  console.log(req.body);
  res.redirect('/userview')
})
app.post(ROUTE_CONSTANTS.POST_REGISTER,function(req,res){
  console.log(req.body);
  res.redirect('/')
})
app.listen(3000);