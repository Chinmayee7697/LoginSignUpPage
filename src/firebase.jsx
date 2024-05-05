// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Mc04Enalk2j7ezeQNrnphZISGTZ89Cg",
  authDomain: "login-signup-976f4.firebaseapp.com",
  projectId: "login-signup-976f4",
  storageBucket: "login-signup-976f4.appspot.com",
  messagingSenderId: "742840698339",
  appId: "1:742840698339:web:5a79263319dec3d4778cd6"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export {auth};