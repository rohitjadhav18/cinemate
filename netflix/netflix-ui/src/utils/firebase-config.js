
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgBlM5fEZjI7rBhJyToAcvSuJOXyPyCVs",
  authDomain: "react-netflix-clone-9f84f.firebaseapp.com",
  projectId: "react-netflix-clone-9f84f",
  storageBucket: "react-netflix-clone-9f84f.appspot.com",
  messagingSenderId: "971516603729",
  appId: "1:971516603729:web:b0a1a2038eec78116a3770",
  measurementId: "G-Q8M7DES563"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);