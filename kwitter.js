function addUser(){
    user_name =document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}
// Javascript code with syntax highlighting.
var fun = function lang(l) {
    dateformat.i18n = require('./lang/' + l)
    return true;
  }