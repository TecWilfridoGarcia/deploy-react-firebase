import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBwTxUm5N-lhYtGhjdbGUJcqmlUuQCgQpw",
  authDomain: "loginreact-f6184.firebaseapp.com",
  projectId: "loginreact-f6184",
  storageBucket: "loginreact-f6184.appspot.com",
  messagingSenderId: "339085271193",
  appId: "1:339085271193:web:f931847aae91585cee1808",
  measurementId: "G-F4YCG5EEKP"
})

export default app;

export const db = app.firestore()