
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeMhUENuVMQNEko8loB8Udf8xazlqx790",
  authDomain: "abhi-blog-46197.firebaseapp.com",
  projectId: "abhi-blog-46197",
  storageBucket: "abhi-blog-46197.appspot.com",
  messagingSenderId: "169928398774",
  appId: "1:169928398774:web:cb47c9a815ebbdc39a1317"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();