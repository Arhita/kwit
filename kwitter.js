function addUser()
{
    user_n=document.getElementById("user_name").value;
    localStorage.setItem("User_name", user_n);
    window.location="kwitter_room.html";
}
