// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg5SQ8QFGd4gK_F7oM9XcuYct-lgELbDg",
  authDomain: "final-hackaton-saylan.firebaseapp.com",
  projectId: "final-hackaton-saylan",
  storageBucket: "final-hackaton-saylan.appspot.com",
  messagingSenderId: "588045987682",
  appId: "1:588045987682:web:c03d17ba1c5cddcb9dc63b",
  measurementId: "G-BV8WWTJMS3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export {
  db,
  getAuth,
  createUserWithEmailAndPassword,
  auth,
  app,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  doc,
  collection,
  addDoc,
  setDoc
};
