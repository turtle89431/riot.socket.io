var app = require('express')();
var { static } = require('express');
var http = require('http').createServer(app);
const { join } = require('path');
require('dotenv').config()
var io = require("./io")
io(http)
let pages = [{ url: "/about", title: "About" }]
app.set('views', join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/dist', static("dist"))
app.use(static("public"))
app.get('/', (req, res) => {
    res.render('index', { message: "from express js", title: "Socket/Riot Example", pages })
});
app.get('/about', (req, res) => {
    res.render('about', { message: "from express js", title: "Socket/Riot Example - About", pages })
});
http.listen(process.env.port, () => {
    console.log(`listening on *:${process.env.port}`);
});