
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAkyDdQZsR_O3HXnzBmBgweTKFq2yeSpKQ",
    authDomain: "kwitterproject-bfba1.firebaseapp.com",
    projectId: "kwitterproject-bfba1",
    storageBucket: "kwitterproject-bfba1.appspot.com",
    messagingSenderId: "653757465959",
    appId: "1:653757465959:web:9a6b58532b36807eeddbc2",
    measurementId: "G-ZCY7ZQTS4R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
