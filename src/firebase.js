import firebase from "firebase";
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyDkhLXgRTD7Iinsv9DkYwPI1FRdeEweCeE",
    authDomain: "profpro-b94f4.firebaseapp.com",
    databaseURL: "https://profpro-b94f4.firebaseio.com",
    projectId: "profpro-b94f4",
    storageBucket: "profpro-b94f4.appspot.com",
    messagingSenderId: "92559816444",
    appId: "1:92559816444:web:e5075f0a683392b1ef0979",
    measurementId: "G-0KP2XPTMNK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { auth,db};