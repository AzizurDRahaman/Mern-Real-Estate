// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9b38a.firebaseapp.com",
  projectId: "mern-estate-9b38a",
  storageBucket: "mern-estate-9b38a.appspot.com",
  messagingSenderId: "332091424451",
  appId: "1:332091424451:web:e92ccf4feac3f715136c76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);