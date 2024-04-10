// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwR4RB3xUwUrdS1oHLi0zPHKC_H7PiwiU",
  authDomain: "instagram-clone-60fad.firebaseapp.com",
  projectId: "instagram-clone-60fad",
  storageBucket: "instagram-clone-60fad.appspot.com",
  messagingSenderId: "207935858960",
  appId: "1:207935858960:web:3d8dc471cf496a05e2dd95",
  measurementId: "G-2N2N5FKF3N",
  databaseURL:
    "https://instagram-clone-60fad-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const FIREBASE_APP = app;
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
