var app = require('express')();
var { static } = require('express');
var http = require('http').createServer(app);
const { join } = require('path');
require('dotenv').config()
var io = require("./io")
io(http)
app.set('views', join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/dist', static("dist"))
app.use(static("public"))
app.get('/', (req, res) => {
    res.render('index', { message: "from express js" })
});
http.listen(process.env.port, () => {
    console.log(`listening on *:${process.env.port}`);
});