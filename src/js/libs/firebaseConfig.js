// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfv4HulNrOSSDOCpTFBWAeFSCW9i_isBg",
  authDomain: "encryptdecrypt-a11cf.firebaseapp.com",
  projectId: "encryptdecrypt-a11cf",
  storageBucket: "encryptdecrypt-a11cf.appspot.com",
  messagingSenderId: "1095000873965",
  appId: "1:1095000873965:web:30faa25965412d7c81a5e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export { db }