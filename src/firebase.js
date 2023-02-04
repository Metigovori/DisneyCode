
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCG3H8o2StvY3Iz8jSYl7hl4SDx5kvrvZw",
    authDomain: "projektidisney.firebaseapp.com",
    projectId: "projektidisney",
    storageBucket: "projektidisney.appspot.com",
    messagingSenderId: "405052332777",
    appId: "1:405052332777:web:14ee93209582af23f02e78",
    measurementId: "G-S20ZQGFLF8"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db  = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
 const provider = new firebase.auth.GoogleAuthProvider();
  export { auth,provider,storage };
  export default db;
 
