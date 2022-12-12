import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO-C9S5YkAuK9Hng74QIo_hhbDxLNqiX0",
  authDomain: "linkedin-clone-c30e6.firebaseapp.com",
  projectId: "linkedin-clone-c30e6",
  storageBucket: "linkedin-clone-c30e6.appspot.com",
  messagingSenderId: "239305699643",
  appId: "1:239305699643:web:6685650519702c4733071e",
  measurementId: "G-XZDS0GHZ4K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };

export default firebase;
