//ADD YOUR FIREBASE LINKS
var Config = {
  apiKey: "AIzaSyAZIVjp133Y1E_fOYebSi1KPnl_QHfN7HY",
  authDomain: "sushassistant-xhaj.firebaseapp.com",
  databaseURL: "https://sushassistant-xhaj-default-rtdb.firebaseio.com",
  projectId: "sushassistant-xhaj",
  storageBucket: "sushassistant-xhaj.appspot.com",
  messagingSenderId: "4298155255",
  appId: "1:4298155255:web:520e36f3c1c9b1b725dff2"
};
firebase.initializeApp(firebaseConfig);






  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "my.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "my.html";
}





function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "firstpg.html";
}