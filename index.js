let express = require('express');
var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);
const request = require('request');


app.use(express.static('public'))

var oldMsg=[];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('A user connected.');
  socket.on('disconnect', function(){
    console.log('A user disconnected');
  });
  socket.on('clientMsg',function(data){
    io.emit('serverMsg',data);
    pushOldMsg(data);
  });
  socket.on('announce',function(data){
    socket.broadcast.emit('serverMsg',data); pushOldMsg(data);
  });
  socket.on('requestOld',function(){ writeOld(socket);});
});
  
function pushOldMsg(data){
  if(oldMsg.length>=10){
    oldMsg.shift();
  }
  oldMsg.push(data);
}

function writeOld(socket){
  for (var i=0; i<oldMsg.length; i++){
    socket.emit("serverMsg",oldMsg[i]);
  }
}

http.listen(3000, function(){});
