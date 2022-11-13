function addUser(){
    username=document.getElementById("username").value;
    localStorage.setItem("user_name", username);

    window.location=("kwitter_room.html");
    alert("We are directing you to the next page, hang on tight and press the button Ok");
    




}