const express  = require('express');
const bodyParser = require('body-parser');
const app = express();

let taskList = [];
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res)=>{
    let today = new Date();
    let currDay = today.getDay()

    let options = {
        weekday : 'long',
        day : 'numeric',
        month :'long'
    };

    let day = today.toLocaleDateString('en-US', options);

    res.render('list', {day : day, newListItems :taskList})
})


app.post('/', (req, res)=>{
    taskList.push(req.body.taskItem);
    res.redirect('/');
})
app.listen(3000, ()=>{
    console.log('At 3000');
    
})