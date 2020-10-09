import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi966C7XnsYZDNq7XjThgsb6cluKQ5mUI",
  authDomain: "clone-403bf.firebaseapp.com",
  databaseURL: "https://clone-403bf.firebaseio.com",
  projectId: "clone-403bf",
  storageBucket: "clone-403bf.appspot.com",
  messagingSenderId: "882468689657",
  appId: "1:882468689657:web:924d0b906220db43e4b428",
  measurementId: "G-WLNHG05BYV"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };