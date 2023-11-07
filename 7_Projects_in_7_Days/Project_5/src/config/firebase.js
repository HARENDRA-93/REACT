// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHiJJl3JN6uQxD_71_9-QIiY8W-YOn77o",
  authDomain: "react-contact-66337.firebaseapp.com",
  projectId: "react-contact-66337",
  storageBucket: "react-contact-66337.appspot.com",
  messagingSenderId: "727383925315",
  appId: "1:727383925315:web:a3c5b3f4d3e627b2bfeaf6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
