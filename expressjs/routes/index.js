var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data =[{
    name: "mahe",
    age: 21,
    salary: 50000
  },
{
  name:"krishna",
    age:22,
    salary:100000
},
{
  name:"Prasanna",
    age:22,
    salary:50000
},
{
  name:"Shivani",
    age:21,
    salary:50000
}]
  res.render('index',
   { title: 'Hello',
   myText:"Express JS" ,
   myName:" Maheswari",
  users:data });
});

module.exports = router;
