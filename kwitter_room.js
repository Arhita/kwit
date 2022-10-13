
//ADD YOUR FIREBASE LINKS HERE
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

    var user_name=localStorage.getItem("User_name");
    document.getElementById("user").innerHTML = "Welcome "+user_name;
    function add_room()
    {
     room_name=document.getElementById("room").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding user name"
     });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='r_r_n(this.id)'>#"+Room_names +"</div> <hr>"
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function r_r_n(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}