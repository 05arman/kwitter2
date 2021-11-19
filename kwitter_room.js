
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAct_AjMWoXoYj_zCm3MMbFGdEwA6M7FZg",
      authDomain: "kwitter2-981b0.firebaseapp.com",
      databaseURL: "https://kwitter2-981b0-default-rtdb.firebaseio.com",
      projectId: "kwitter2-981b0",
      storageBucket: "kwitter2-981b0.appspot.com",
      messagingSenderId: "466472528402",
      appId: "1:466472528402:web:826bfcd9bc382d4564c6cb",
      measurementId: "G-4TEVQQK7Q7"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");
  
  function send(){
        msg= document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";

  }

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_name"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}

function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
windows.location="kwitter_page.html";


}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "kwitter.html"
}