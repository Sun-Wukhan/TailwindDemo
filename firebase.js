// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATsRx-ceA7k-qAGzhyE8zKU3j_KSafLNQ",
  authDomain: "uber-clone-52574.firebaseapp.com",
  projectId: "uber-clone-52574",
  storageBucket: "uber-clone-52574.appspot.com",
  messagingSenderId: "976441600385",
  appId: "1:976441600385:web:5bed04bbbbe147d819a080",
  measurementId: "G-XZ9L2XX8WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider(); 
const auth = getAuth()

export {app, provider, auth}