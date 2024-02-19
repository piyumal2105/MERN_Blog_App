// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-23cd9.firebaseapp.com",
  projectId: "mern-blog-23cd9",
  storageBucket: "mern-blog-23cd9.appspot.com",
  messagingSenderId: "859107029088",
  appId: "1:859107029088:web:653f406c476397f0375305",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
