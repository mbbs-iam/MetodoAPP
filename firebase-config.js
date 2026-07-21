/* ================================================================
   STUDIIT firebase-config.js — Firebase SDK v10 (Modular ES6)
   ================================================================ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  arrayUnion,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase App Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2KFJeG1HhLEQyYzP9t6lxM_ZHhohQ7X4",
  authDomain: "metodoapp-1610a.firebaseapp.com",
  projectId: "metodoapp-1610a",
  storageBucket: "metodoapp-1610a.firebasestorage.app",
  messagingSenderId: "34098384838",
  appId: "1:34098384838:web:107a335c355e00ef7b2cc7",
  measurementId: "G-6M4EFZY6TX"
};

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Expose to window for global app access
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;

export {
  app,
  auth,
  db,
  googleProvider,
  // Auth Functions
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  // Firestore Functions
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  arrayUnion,
  increment
};
