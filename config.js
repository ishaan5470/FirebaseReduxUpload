import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBjZQ9Levo2QvytUpT-ZO4NiTUh7vSG1GQ",
  authDomain: "storaging-55456.firebaseapp.com",
  projectId: "storaging-55456",
  storageBucket: "storaging-55456.appspot.com",
  messagingSenderId: "542085040602",
  appId: "1:542085040602:web:2de46305dbfd714ee358e3",
  measurementId: "G-83R1W2NZF7"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase}






