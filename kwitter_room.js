const firebaseConfig = {
    apiKey: "AIzaSyCQ1Wiefal-VmZHleT5T9whg4gvf5CivuM",
    authDomain: "kwittwe-prohjecy.firebaseapp.com",
    projectId: "kwittwe-prohjecy",
    storageBucket: "kwittwe-prohjecy.appspot.com",
    messagingSenderId: "431462203877",
    appId: "1:431462203877:web:02bc43f79ee63870822f0c"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");


document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom()
{
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose:"Adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html";
}

  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    
    });});}
getData();

function redirectToRoomName(name)
{
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}