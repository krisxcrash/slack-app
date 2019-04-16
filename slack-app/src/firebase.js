import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBZSEuwCxsbXPJPodgL9zNQONoRjkI0t_Y",
  authDomain: "kxc-slack-app.firebaseapp.com",
  databaseURL: "https://kxc-slack-app.firebaseio.com",
  projectId: "kxc-slack-app",
  storageBucket: "kxc-slack-app.appspot.com",
  messagingSenderId: "685587400026"
};
firebase.initializeApp(config);

export default firebase;
