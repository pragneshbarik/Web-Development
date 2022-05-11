// jshint esversion: 6
const express = require("express");
const bodyParser =  require("body-parser");
const request  = require("request");
const https  = require("https");
const { response } = require("express");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
})


app.post("/", (req, res)=>{
    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;

    var emaildata = {
        members : [
            {
                email_address : email,
                status : "subscribed",
                merge_fields : {
                    FNAME : fName,
                    LNAME : lName
                }
            }
        ]
    }

    var jsonData = JSON.stringify(emaildata);

    const url = "https://us12.api.mailchimp.com/3.0/d4678a18e7";

    const options = {
        method : "POST",
        auth : "pragnesh_barik:d4b39fe6ce14919c62fb730e17b83902-us12"
    }

    const request = https.request(url, options, (response)=>{
        response.on("data", (d)=>{
            console.log(JSON.parse(d));
        })
    })

    request.write(jsonData);
    request.end();
    
    console.log(fName);
    console.log(lName);
    console.log(email);
})

app.listen(3000, ()=>{
    console.log("started at 3000");
})

// api key : d4b39fe6ce14919c62fb730e17b83902-us12
// list id : d4678a18e7 