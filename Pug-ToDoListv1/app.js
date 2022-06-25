const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;
const app  = express();


let taskList = []
app.use(express.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static("public"));

app.get('/', (req, res)=>{
    let today = new Date();

    let options = {
        weekday : 'long',
        day : 'numeric',
        month :'long'
    };

    let day = today.toLocaleDateString('en-US', options);
    res.render('index', {today : day, list : taskList});
})


app.post('/', (req, res)=>{
    taskList.push(req.body.todoItem);
    res.redirect('/');
})
app.listen(PORT, ()=> {
    console.log(`Listening at ${PORT}`);
})