// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcMKUHVDRQ3rS-Fwxa-cbwbrmzAfGs2hY",
  authDomain: "e-commerce-coder-a3c36.firebaseapp.com",
  projectId: "e-commerce-coder-a3c36",
  storageBucket: "e-commerce-coder-a3c36.appspot.com",
  messagingSenderId: "276580701904",
  appId: "1:276580701904:web:e0198f375ee8b7661ef0d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
