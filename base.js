

var express = require('express');
var app = express();
var serv = require('http') .Server(app);
const PORT = process.env.PORT || 5000;


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

serv.listen(PORT);
console.log("Game has booted! Enjoy!");

var io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket){
    console.log('Connect Established!')
});

