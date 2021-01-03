import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDc6DQj7HKblVys1Gd6TrNZ1-dsAW6Gxdw",
  authDomain: "financialapp-4b5c2.firebaseapp.com",
  databaseURL: "https://financialapp-4b5c2-default-rtdb.firebaseio.com",
  projectId: "financialapp-4b5c2",
  storageBucket: "financialapp-4b5c2.appspot.com",
  messagingSenderId: "511882391315",
  appId: "1:511882391315:web:a31f34d1e41ce6ffc374e6",
  measurementId: "G-SD35Q0ZT1D"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;