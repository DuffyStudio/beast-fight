var socket = io();
var username = prompt("Please enter your name", "UserName");

function addSocketEvents(socket){
  //for chat.js
  socket.on('serverMsg',function(data){addToChat(data);});

}
addSocketEvents(socket);
announceJoin();
function announceJoin(){
  var data ={};
  data.user = username;
  data.msg = 'is Now Coding';
  socket.emit('announce',data);
  socket.emit('requestOld');
}