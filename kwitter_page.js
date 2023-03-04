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
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name1_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>>";
message_with_tag ="<h4 class='message_h4'>"+message+ "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+ "</span></button><hr>";
row= name1_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
    } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name:user_name,
 message :msg,
 like:0
});
document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }
function updateLike(message_id){
    console.log("clicked on like button -"+message_id);
    like_button=message_id;
    likes =document.getElementById(like_button).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes
    });
}
// Javascript code with syntax highlighting.
var fun = function lang(l) {
    dateformat.i18n = require('./lang/' + l)
    return true;
  }
