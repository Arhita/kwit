var firebaseConfig = {
    apiKey: "AIzaSyDKkQvdu3pc4KcwWo2El6oZo0axHtkTRBs",
    authDomain: "kwitter-918ef.firebaseapp.com",
    databaseURL: "https://kwitter-918ef-default-rtdb.firebaseio.com",
    projectId: "kwitter-918ef",
    storageBucket: "kwitter-918ef.appspot.com",
    messagingSenderId: "166966398623",
    appId: "1:166966398623:web:08e564babd0687a7159caa"
  };
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
 user_name = document.getElementById("input_1").value;
 firebase.database().ref("/").child(user_name).update({
     purpose : "Adding User"
 });
}