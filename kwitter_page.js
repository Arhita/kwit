//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDKkQvdu3pc4KcwWo2El6oZo0axHtkTRBs",
      authDomain: "kwitter-918ef.firebaseapp.com",
      databaseURL: "https://kwitter-918ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-918ef",
      storageBucket: "kwitter-918ef.appspot.com",
      messagingSenderId: "166966398623",
      appId: "1:166966398623:web:08e564babd0687a7159caa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("User_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data["name"];
         message=message_data["message"];
         like=message_data["like"];
         name_with_tag="<h4>" +name+ "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>" +message+ "</h4>";
         like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like"+like+"</span></button><hr>";
         row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function logout()
{
 localStorage.removeItem('User_name');
 localStorage.removeItem('room_name');
 window.location="index.html";
}

function send()
{
  msg=document.getElementById("mess").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
  });
  document.getElementById("mess").value="";
}

function updateLike(message_id) { console.log("clicked on like button - " + message_id);
 button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }