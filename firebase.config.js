// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyXJI_1QyHsEjUThvU03JPj-o9fWZxss",
  authDomain: "lilac-b5430.firebaseapp.com",
  projectId: "lilac-b5430",
  storageBucket: "lilac-b5430.firebasestorage.app",
  messagingSenderId: "545298040200",
  appId: "1:545298040200:web:7cf9ee1b47469bc95ce63d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;