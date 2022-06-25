const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;
const app = express();

let homeStartContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem quisquam fugit dolorum itaque placeat! Corrupti, ipsa ratione natus saepe beatae error, vel velit, a ducimus doloribus eaque aspernatur consequatur veritatis?";
let aboutContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique.";
let contactContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique.";
let posts = []
let link_map = new Map()

app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('home', {titlehead : 'Home', content : homeStartContent, posts : posts});
})
app.get('/about', (req, res)=>{
    res.render('about', {titlehead : 'About', content : aboutContent});
})
app.get('/contact', (req, res)=>{
    res.render('contact', {titlehead : 'Contact Us', content : contactContent});
})

app.get('/compose', (req, res)=>{
    res.render('compose', {titlehead : 'Compose'})
})

//Routing Parameters
app.get('/posts/:title_link', (req, res)=>{
    link = req.params.title_link
    res.render('posts', {titlehead : link_map.get(link).title, 
        content : link_map.get(link).content})
})

app.post('/compose', (req, res)=>{
    postLink = req.body.postTitle.replace(/\s+/g, '-').toLowerCase();
    let post  = {link : postLink, title : req.body.postTitle, content : req.body.postContent}
    link_map.set(postLink, post);
    posts.push(post);
    res.redirect('/')
})

app.listen(PORT, ()=>{
    console.log("Successfully Started at port " + PORT);
})
