var firebaseConfig = {
   apiKey: "AIzaSyAFWxJ6t5OQNBTHbpzmdgB0MNebgdwS2Cs",
  authDomain: "robotic-idiom-341108.firebaseapp.com",
  projectId: "robotic-idiom-341108",
  storageBucket: "robotic-idiom-341108.appspot.com",
  messagingSenderId: "376424146465",
  appId: "1:376424146465:web:16670c071e82b821506560"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
    Room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({
          purpose :"Adding Room name"
    });
    localStorage.setItem("room_name",Room_name);
    window.location = "kwitter_page.html";
}
function getData()
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
     Room_names = childKey;
     
    //Start code
console.log("Room Name -" +Room_name);
row="<div class='room_name' id="+Room_name+" onclick='GoToRoom_Name(this.id)'>#"+Room_name+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
    getData();
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="index.html";
    }
    
    function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }
    // Javascript code with syntax highlighting.
var fun = function lang(l) {
    dateformat.i18n = require('./lang/' + l)
    return true;
  }
