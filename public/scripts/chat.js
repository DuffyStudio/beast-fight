function addToChat(data){
  var text;
  switch(Math.floor(Math.random()*4)){
    case 0:
      text = '&emsp;<span class ="blue">if</span><span class="purple">(</span>'+data.user + '<span class="purple">)</span></br>&emsp;&emsp;<span class="purple">{</span>'+data.msg + ';<span class="purple">}</span></br>';
      break;
    case 1:
      text = '<span class ="blue">function </span>'+data.user + '<span class="purple">() {</span>'+'</br>&emsp;'+data.msg + ';</br><span class="purple">}</br>';
      break;
    case 2:
      text = '&emsp;<span class ="green">// '+data.user + ' '+data.msg +'</br>';
      break;
    case 3:
      text = '<span class ="blue">const </span>'+data.user + ' = "'+data.msg +'";</br>';
      break;
    default:
      text = data.user + ": "+data.msg + "</br>";
  }
  document.getElementById("chat").innerHTML += text;
  var objDiv = document.getElementById("chat");
objDiv.scrollTop = objDiv.scrollHeight;
}
document.getElementById('msg').onkeydown = function(e){
  if (e.keyCode==13){
     var data ={};
     data.user = username;
     data.msg = getMsgText();
     socket.emit('clientMsg',data);
  }
}

function getMsgText(){
  var msg = document.getElementById('msg').value;
  document.getElementById('msg').value = '';
  return msg;
}