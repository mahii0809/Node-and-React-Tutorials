const express= require('express');
const { ROUTE_CONSTANTS } = require('./helpers/route_const');
var bodyParser = require('body-parser')
const app=express();//to initialize
//express js internally uses http module
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//GET,POST,DELETE,
//Parameters:route,callback function
app.get(ROUTE_CONSTANTS.DEFAULT,function (req,res){
    res.sendFile(__dirname+'/Home.html')
});
app.get(ROUTE_CONSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/Login.html')
});
app.get(ROUTE_CONSTANTS.GET_REGISTER,function (req,res){
    res.sendFile(__dirname+'/Register.html')
});
app.post(ROUTE_CONSTANTS.POST_REGISTER,function(req,res){
    console.log(req.body);
    res.send("Successfully Registered!")
})
app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function (req,res){
    const productData= [
        {
          "_id": "5f58615822fe09be3c73a9d8",
          "index": 0,
          "guid": "945ccd6f-2c5b-488e-a857-fcd476b3a730",
          "isActive": true,
          "balance": "$1,648.97",
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "brown",
          "name": "Mara Monroe",
          "gender": "female",
          "company": "ISOLOGICS",
          "email": "maramonroe@isologics.com",
          "phone": "+1 (986) 400-2462",
          "address": "948 John Street, Cherokee, South Dakota, 9886",
          "about": "Mollit ex nostrud deserunt do anim cupidatat quis amet minim in sint tempor cillum. Nisi tempor nostrud incididunt reprehenderit. Sit cupidatat exercitation minim ipsum culpa quis cillum amet culpa reprehenderit non consequat incididunt sit. Do laborum enim cillum reprehenderit mollit reprehenderit occaecat consectetur et ipsum. Officia proident voluptate culpa anim veniam ipsum minim commodo commodo dolor.\r\n",
          "registered": "2016-03-28T12:32:53 -06:-30",
          "latitude": 84.213545,
          "longitude": -48.224917,
          "tags": [
            "esse",
            "ipsum",
            "officia",
            "est",
            "ut",
            "eu",
            "nisi"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Howell Bullock"
            },
            {
              "id": 1,
              "name": "Tyler Merrill"
            },
            {
              "id": 2,
              "name": "Ilene Joyner"
            }
          ],
          "greeting": "Hello, Mara Monroe! You have 6 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f58615850b355777fb5e889",
          "index": 1,
          "guid": "1e2d909a-53bb-4bff-90ce-cbd4ebf6cbd6",
          "isActive": true,
          "balance": "$1,762.34",
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "green",
          "name": "Cantrell Fletcher",
          "gender": "male",
          "company": "CENTREXIN",
          "email": "cantrellfletcher@centrexin.com",
          "phone": "+1 (812) 556-2428",
          "address": "504 Wyckoff Street, Campo, Delaware, 9487",
          "about": "Tempor non cupidatat culpa proident nulla deserunt. Adipisicing amet labore veniam aliquip nulla ex. Duis occaecat magna nulla nisi commodo commodo. Excepteur ex proident eiusmod magna in incididunt. Deserunt deserunt id cupidatat velit sunt elit. Ut ad aliquip consequat qui nisi reprehenderit et anim ipsum ex id velit nisi. Qui sint Lorem eiusmod cillum do.\r\n",
          "registered": "2019-12-08T01:40:35 -06:-30",
          "latitude": -31.455241,
          "longitude": 137.671108,
          "tags": [
            "et",
            "sint",
            "fugiat",
            "ad",
            "aute",
            "duis",
            "consequat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Yesenia Guthrie"
            },
            {
              "id": 1,
              "name": "Briana Gallagher"
            },
            {
              "id": 2,
              "name": "Compton Sargent"
            }
          ],
          "greeting": "Hello, Cantrell Fletcher! You have 1 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5861589b26b1ff44623633",
          "index": 2,
          "guid": "b876e11c-02dd-4925-990e-1b4514d49904",
          "isActive": false,
          "balance": "$1,748.17",
          "picture": "http://placehold.it/32x32",
          "age": 26,
          "eyeColor": "blue",
          "name": "Newton Whitehead",
          "gender": "male",
          "company": "LOTRON",
          "email": "newtonwhitehead@lotron.com",
          "phone": "+1 (851) 572-2434",
          "address": "394 Crystal Street, Bennett, Missouri, 835",
          "about": "Consequat aliqua sit aliqua adipisicing aliquip deserunt amet irure nulla ex. Aliquip adipisicing ullamco duis id. Excepteur eu ex duis qui. Dolor adipisicing sit ullamco culpa laboris velit laboris ipsum commodo.\r\n",
          "registered": "2017-11-06T10:05:24 -06:-30",
          "latitude": 23.929147,
          "longitude": 140.694773,
          "tags": [
            "consectetur",
            "non",
            "eu",
            "proident",
            "cupidatat",
            "elit",
            "id"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Mcleod Woods"
            },
            {
              "id": 1,
              "name": "Celia Parks"
            },
            {
              "id": 2,
              "name": "Weeks Reynolds"
            }
          ],
          "greeting": "Hello, Newton Whitehead! You have 2 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5861584adc4acffa0fc410",
          "index": 3,
          "guid": "59b45fb9-82b6-4a50-a46e-47982e00568c",
          "isActive": false,
          "balance": "$1,881.57",
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "green",
          "name": "Regina Horton",
          "gender": "female",
          "company": "SPHERIX",
          "email": "reginahorton@spherix.com",
          "phone": "+1 (865) 550-3680",
          "address": "813 Porter Avenue, Snelling, Arizona, 8332",
          "about": "Irure aliquip labore deserunt excepteur mollit minim qui. Fugiat incididunt nulla exercitation laboris et occaecat eu mollit excepteur ullamco. Occaecat cillum in sunt enim eiusmod aliqua ad consectetur quis laborum ut ullamco. Occaecat sunt labore ipsum est sit velit cillum reprehenderit.\r\n",
          "registered": "2018-07-10T09:57:57 -06:-30",
          "latitude": 62.89316,
          "longitude": 36.251875,
          "tags": [
            "eiusmod",
            "Lorem",
            "incididunt",
            "deserunt",
            "minim",
            "ex",
            "velit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Clarke Hart"
            },
            {
              "id": 1,
              "name": "Kristina Diaz"
            },
            {
              "id": 2,
              "name": "Michele Huff"
            }
          ],
          "greeting": "Hello, Regina Horton! You have 9 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5861586b88a6eb01e98fd5",
          "index": 4,
          "guid": "731cce67-1043-44fe-b93c-8cd3be79983a",
          "isActive": false,
          "balance": "$3,205.68",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "green",
          "name": "Harrell Fuentes",
          "gender": "male",
          "company": "EVENTEX",
          "email": "harrellfuentes@eventex.com",
          "phone": "+1 (894) 428-2561",
          "address": "721 Sackett Street, Soudan, Virgin Islands, 9549",
          "about": "Aliquip officia nostrud velit minim et aliquip. Lorem magna Lorem ipsum sunt amet enim laboris commodo tempor eu. Voluptate reprehenderit occaecat enim aliqua consectetur duis duis dolore eu quis fugiat.\r\n",
          "registered": "2016-06-23T07:05:40 -06:-30",
          "latitude": -35.27986,
          "longitude": -52.62317,
          "tags": [
            "sit",
            "in",
            "ea",
            "do",
            "adipisicing",
            "dolore",
            "est"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Cross Barrera"
            },
            {
              "id": 1,
              "name": "Cassie Whitaker"
            },
            {
              "id": 2,
              "name": "Sanford Keller"
            }
          ],
          "greeting": "Hello, Harrell Fuentes! You have 3 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f58615830090324f16c0d20",
          "index": 5,
          "guid": "29fcaf8a-f8c1-4905-80e5-e0ca88c7ca2b",
          "isActive": true,
          "balance": "$1,822.04",
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "brown",
          "name": "Wiggins Shepard",
          "gender": "male",
          "company": "FORTEAN",
          "email": "wigginsshepard@fortean.com",
          "phone": "+1 (830) 535-2493",
          "address": "170 Empire Boulevard, Avoca, American Samoa, 6584",
          "about": "Reprehenderit sunt veniam enim ex voluptate eu aute ut incididunt id. Laboris ullamco reprehenderit fugiat do esse exercitation occaecat adipisicing ullamco fugiat. Quis ex sunt dolor consequat pariatur aute nostrud fugiat ipsum ipsum reprehenderit. Ullamco occaecat et id cupidatat aliqua laborum exercitation. Veniam id nisi enim excepteur id cupidatat sunt cupidatat occaecat magna. Esse proident aute velit amet commodo dolor. Consectetur fugiat commodo aliquip cupidatat est quis.\r\n",
          "registered": "2015-04-15T08:42:29 -06:-30",
          "latitude": 77.073234,
          "longitude": -46.329754,
          "tags": [
            "dolor",
            "laborum",
            "mollit",
            "enim",
            "nulla",
            "ex",
            "minim"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Suarez Dunn"
            },
            {
              "id": 1,
              "name": "Hyde Wolf"
            },
            {
              "id": 2,
              "name": "Jeanine Moreno"
            }
          ],
          "greeting": "Hello, Wiggins Shepard! You have 5 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f586158a764d93054d30bb5",
          "index": 6,
          "guid": "ab46d594-975c-455b-b05e-01127db1eaf4",
          "isActive": false,
          "balance": "$1,419.88",
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "eyeColor": "brown",
          "name": "Erin Mendez",
          "gender": "female",
          "company": "DATACATOR",
          "email": "erinmendez@datacator.com",
          "phone": "+1 (866) 588-3234",
          "address": "487 Ryder Avenue, Gila, Louisiana, 1853",
          "about": "Id aliqua laboris ea elit occaecat esse id dolore do occaecat quis nulla tempor. Cillum esse fugiat tempor dolor excepteur. Cupidatat mollit in quis ex. Cupidatat esse magna anim incididunt sunt est.\r\n",
          "registered": "2018-09-18T10:12:04 -06:-30",
          "latitude": 76.254392,
          "longitude": 136.310108,
          "tags": [
            "ad",
            "velit",
            "excepteur",
            "esse",
            "voluptate",
            "ullamco",
            "laborum"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Mckay Payne"
            },
            {
              "id": 1,
              "name": "Malone Duncan"
            },
            {
              "id": 2,
              "name": "James Holmes"
            }
          ],
          "greeting": "Hello, Erin Mendez! You have 2 unread messages.",
          "favoriteFruit": "strawberry"
        }
      ];
          res.json(productData)
});
app.get(ROUTE_CONSTANTS.GET_FILE,function(req,res){
    res.sendFile(__dirname+"/sample.pdf")
})
app.listen(3000);