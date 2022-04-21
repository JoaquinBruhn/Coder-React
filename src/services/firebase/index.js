// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDheaF8Q1nRJPNWj-eTEhnJ2e94hu5Aue4",
  authDomain: "e-comerce-coder.firebaseapp.com",
  projectId: "e-comerce-coder",
  storageBucket: "e-comerce-coder.appspot.com",
  messagingSenderId: "1033581361905",
  appId: "1:1033581361905:web:74c54b16936556d4b20750",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
