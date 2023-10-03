// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRP2XZKbKDSObcN6XNnCu07nIhUfapWXQ",
  authDomain: "derleng-227d0.firebaseapp.com",
  projectId: "derleng-227d0",
  storageBucket: "derleng-227d0.appspot.com",
  messagingSenderId: "606115261125",
  appId: "1:606115261125:web:c233096b745e7bdb469eac",
  measurementId: "G-SXHZ5WEM91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Firebase Analytics
export const analytics = getAnalytics(app);