// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzqC5nF4nxRVeTLiWcuvdd3GK7dhutkKU",
  authDomain: "studentbjt-e2f9e.firebaseapp.com",
  projectId: "studentbjt-e2f9e",
  storageBucket: "studentbjt-e2f9e.appspot.com",
  messagingSenderId: "839017427592",
  appId: "1:839017427592:web:5937e8ea9d49a7b9caa53d",
  measurementId: "G-WTJ29K53HC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
