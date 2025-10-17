// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANl2G2jXDZbJ9INvF8gS-_eY9kJaJn6cs",
  authDomain: "shinyx-47e78.firebaseapp.com",
  projectId: "shinyx-47e78",
  storageBucket: "shinyx-47e78.firebasestorage.app",
  messagingSenderId: "406277863268",
  appId: "1:406277863268:web:23e381e2eb1c37eeff6c71"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
