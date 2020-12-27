import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCSJ-I5oSOtZELnrCJ2eYW7mYNG2Dr1WEo",
  authDomain: "meuapp-31f1e.firebaseapp.com",
  databaseURL: "https://meuapp-31f1e.firebaseio.com",
  projectId: "meuapp-31f1e",
  storageBucket: "meuapp-31f1e.appspot.com",
  messagingSenderId: "19079705560",
  appId: "1:19079705560:web:f5513e17a026f9cc89b8ad",
  measurementId: "G-G3J7KKDT21"
};


if (!firebase.app.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;