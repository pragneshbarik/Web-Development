//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname)));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    num1 = Number(req.body.w);
    num2 = Number(req.body.h);

    result = num1/(num2*num2) ;
    res.send("Your BMI is " + result);
 
});

app.listen(3000, ()=> {
    console.log("started at port 3000");
})