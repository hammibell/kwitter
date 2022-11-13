
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCFcibZaAunxZ9wx6b2ksnzfTCw6W4Wdfg",
      authDomain: "kwitter-app-dba06.firebaseapp.com",
      databaseURL: "https://kwitter-app-dba06-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-dba06",
      storageBucket: "kwitter-app-dba06.appspot.com",
      messagingSenderId: "2620466955",
      appId: "1:2620466955:web:f93f9778079db11e3ea40e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    username = localStorage.getItem("user_name");
    document.getElementById("hello").innerHTML="Welcome "+ username + "!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update(
            {
                  purpose: "Adding room name"
                  
            }
      );
      window.location=("kwitter_page.html");
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location=("kwitter_page.html");

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location=("index.html");

}




