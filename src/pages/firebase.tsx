// src/firebase.tsx
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNsuclQzCdrjZypsxmpHqe2172MXNW_Uk",
  authDomain: "fir-auth-bfa2d.firebaseapp.com",
  projectId: "fir-auth-bfa2d",
  storageBucket: "fir-auth-bfa2d.appspot.com",
  messagingSenderId: "256960537173",
  appId: "1:256960537173:web:97b70c3f4d95966f33eadc",
  measurementId: "G-GJ3JH768FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances

