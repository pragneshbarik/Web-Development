const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
    
})

app.post("/", (req, res)=>{
    console.log("Post Recieved");
    const api_key = "63b309a93257225a988b5a2e7bbb3230"
    var query = req.body.location;
    const units = "metric" 
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + api_key +"&units=" + units;
    

    console.log(url);
    https.get(url, (weather_res)=>{
        
        weather_res.on('data', (d)=>{
            const weatherData = JSON.parse(d);
            t = weatherData.main.temp;
            desc = weatherData.weather[0].description;
            wIcon = weatherData.weather[0].icon
            icon_url = "http://openweathermap.org/img/wn/" + wIcon + "@2x.png";
            console.log(t);
            console.log(desc);
            res.write("<head><meta charset='utf-8'></head>");
            res.write("<h1>The temperature in London is " + t + " C and weather is currently " + desc + ".</h1>");
            res.write("<br><img src=" + icon_url + ">");
            res.send();

        })
    });
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})