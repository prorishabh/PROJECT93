const firebaseConfig = {
    apiKey: "AIzaSyDns3MQNOBYNLnwngDlcljT16NPx9-EZSI",
    authDomain: "kwitter-web-app-3d672.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-3d672-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-3d672",
    storageBucket: "kwitter-web-app-3d672.appspot.com",
    messagingSenderId: "641554496891",
    appId: "1:641554496891:web:804d082a90c9a0c2e691de"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function add_room()
{
    room_name=document.getElementById("room_name").value;

    localStorage.setItem("roomname",room_name);

    window.location="Kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;


   });});}
getData();
